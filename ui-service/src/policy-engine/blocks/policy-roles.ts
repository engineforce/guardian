import {EventBlock} from '@policy-engine/helpers/decorators';
import {IAuthUser} from '../../auth/auth.interface';
import {PolicyBlockHelpers} from '@policy-engine/helpers/policy-block-helpers';
import {getMongoRepository} from 'typeorm';
import {Policy} from '@entity/policy';
import {StateContainer} from '@policy-engine/state-container';

@EventBlock({
    blockType: 'policyRolesBlock',
    commonBlock: false,
})
export class PolicyRolesBlock {
    async getData(user: IAuthUser): Promise<any> {
        const ref = PolicyBlockHelpers.GetBlockRef(this);
        return {
            roles: Array.isArray(ref.options.roles) ? ref.options.roles : [],
            uiMetaData: ref.options.uiMetaData
        }
    }

    async setData(user: IAuthUser, document: any): Promise<any> {
        const policyRepository = getMongoRepository(Policy);
        const ref = PolicyBlockHelpers.GetBlockRef(this);
        const currentPolicy = await policyRepository.findOne(ref.policyId);

        if (typeof currentPolicy.registeredUsers !== 'object') {
            currentPolicy.registeredUsers = {};
        }
        currentPolicy.registeredUsers[user.did] = document.role;

        const result = await policyRepository.save(currentPolicy);
        StateContainer.UpdateFn(ref.parent.uuid, {}, user, ref.tag);

        return result;
    }
}
