import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ISession } from 'interfaces';

/**
 * Services for working from demo.
 */
@Injectable()
export class DemoService {
  private readonly url: string = '/api/demo';
  constructor(
    private http: HttpClient
  ) {
  }

  public getRandomKey(): Observable<any> {
    return this.http.get<any>(`${this.url}/random-key`);
  }

  public getAllUsers(): Observable<ISession[]> {
    return this.http.get<any>(`${this.url}/all-users`);
  }
}