import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { PaginationConfig, PostsRequest, UsersRequest } from './api-call.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient) { }

  getUserByName(userInput: string): Observable<UsersRequest> {
    return this.http.get<UsersRequest>(
      `https://gorest.co.in/public-api/users?name=${userInput}`
    );
  }

  getPostsById(userId: number): Observable<PostsRequest> {
    return this.http.get<PostsRequest>(
      `https://gorest.co.in/public-api/users/${userId}/posts`
    );
  }
}
