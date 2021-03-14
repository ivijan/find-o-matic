import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  IPostData,
  IPostsRequest,
  IUserData,
} from './api-call/api-call.interface';
import { ApiCallService } from './api-call/api-call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  posts: IPostData[] = [];
  pageTitle = '';

  constructor(private apiCallService: ApiCallService) {
    this.pageTitle = environment.title
  }

  userSelected(event: IUserData) {
    this.apiCallService
      .getPostsById(event.id)
      .subscribe((postsRequest: IPostsRequest) => {
        this.posts = postsRequest.data;
      });
  }
}
