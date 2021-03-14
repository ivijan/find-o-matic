import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { IPaginationConfig, IPostsRequest, IUsersRequest } from './api-call.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient) { }

  getUserByName(userInput: string): Observable<IUsersRequest> {
    return this.http.get<IUsersRequest>(
      `https://gorest.co.in/public-api/users?name=${userInput}`
    );
  }

  getPostsById(userId: number): Observable<IPostsRequest> {
    return this.http.get<IPostsRequest>(
      `https://gorest.co.in/public-api/users/${userId}/posts`
    );
  }
}
