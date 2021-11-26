# Release Management Plan
This document describes general approach to release management for the Guardian codebase, and contians detailed sequence of events/actions required for production of releases. The purpose of this document is to inform the community about the processes, and provide guidance to internal teams working on the product.

### Release schedule and numbering

Guardian development team follows Scrum methodology, with 2-week sprints. Software releases are produced on regular cadence every other sprint, i.e every 4 weeks, regardless of the status of features in development. Releases are produced on Mondays following the end-of-sprint review on Friday previous week.

Guardian uses semantic versioning for releases in the major.minor.build format, each number incremented sequentially to denote the following changes:
- major: a signifcant milestone in product lifecycle has been reached
- minor: the release contains notable new capabilities
- build: incremental release brining enchancments and bug fixes

In the future there will likely be backwards compatibility meaning assigned to these changes.

### Release process
Guardian release process is built around the sprint cycle, where each sprint ends with the codebase in the 'releasable' state. The only difference between the alternating release sprints and non-release sprints is the activities of packaging and uploading artefacts into external repositories.

#### Feature development cycle
A inception-to-release lifecycle of a new enchacement is usually 3 sprints long:
- One sprint (or longer, or shorter) is dedicated to MRD/PRD work by the product team. Developers are not actively working on the feature during this period, their involvement is limited to providing SME (Subject Matter Expert) consulting services to Product.
- Next sprint is dedicated to refining, scoping, estimating, prioritising and planning feature into tasks for the development backlog. This requires collaborative work between development and product.
- The last sprint is implementation of the task.

It can be summarised in the following table:

|          | Sprint 1 | Sprint 2 | Sprint 3 |
| -------- | -------- | -------- | -------- |
| **Product**  | MRD/PRD, business priorities    | Lead refinement, plan    | Monitor, answer question     |
| **Dev**      | Consult Prod   | Refine, scope and estimate     | Implement     |

#### Sprint flow
Product management and stakeholders create MRDs/PRDs for product features outside of Scrum framework (in Sprint 1 and/or early in Sprint 2). Development starts getting involved in planning with the Refinement Scrum ceremony, during which issues are estimated, split into tasks (if required), discussed and clarified.

The team enters a new sprint with defined scope: list of estimated and assigned issues ready to be worked on for the next two weeks. 

Daily Scrum ceremony insures that development is synced up on all activites, and any blockers and obstacles are promptly reserved.

Developers submit PRs, which get merged into 'Develop' branch after peer review which also validates that presence of the unit tests covering the new code.

Features are marked as Done when they satisfy the definition of done after the review of the 'acceptance criteria' by the product team and stakeholders.

After the Sprint ended, PO leads the Sprint Review ceremony on Monday
- Entire team present
- Stakeholders invited
- PO delivers a sprint report (with charts and statistics of the sprint)
- Developers demo completed features, which includes showing unit tests and documentation (where relevant). For features without exposure through a UI developers demo the successful run of the unit test.

Following the Sprint Review lead developer tags and merges 'Develop' into 'Main'.

On Tuesday PO holds a 'Retrospective' meeting where developers discuss between themselves successes/failures of the previous sprint and opportunities for improvements.

#### Release flow

Release sprint contain additional activities:
- Documentation review by the PM
- Unit tests verification by the lead developer
- Demo environment sanity tested by lead developer, product team and/or stakeholders
- PO prepares ChangeLog document
- PM prepares Release notes
- PM tags the release and runs release CI pipeline, following which verifies that it completed successfully and all artefacts got uploaded to the correct repositories
- PO posts community announcements in the discord and slack channels


#### Artefacts list

- Source code archives (in github)
- Docker image (in Docker Hub)
- Npm packages (in NPM registry) 
  - Message Broker
  - UI Service
  - Guardian Service
  - MRV Sender Service
- Changelog and release notes (.md file in github)
- User guide and demo guide (.md file in github)

### Release checklist

- [ ] Demo/User guide updated to relfect the new changes 
- [ ] All issues merged in the develop branched are marked as Done, those which have been created by community stakeholders have a comment in which a stakeholder is tagged (for notification).
- [ ] Unit tests passed :tada: (manual run)
- [ ] "Develop" branch tagged with an appropriate release number before merge to main
- [ ] "Develop" branch is squash-merged to main
- [ ] "Main" branch is tagged with the appropriate release number and the release is created
- [ ] Github actions CI run, unit tests passed :tada:, all artefacts produced and uploaded into the corresponding repos
- [ ] Release Notes are posted in Slack and Discord channels
- [ ] Next release label is created

