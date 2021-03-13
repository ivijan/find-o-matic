import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  PostData,
  PostsRequest,
  UserData,
} from './api-call/api-call.interface';
import { ApiCallService } from './api-call/api-call.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  posts: PostData[] = [];
  pageTitle = '';

  constructor(private apiCallService: ApiCallService) {
    this.pageTitle = environment.title
  }

  userSelected(event: UserData) {
    this.apiCallService
      .getPostsById(event.id)
      .subscribe((postsRequest: PostsRequest) => {
        this.posts = postsRequest.data;
      });
  }
}
