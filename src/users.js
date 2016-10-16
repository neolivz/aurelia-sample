import {inject} from 'aurelia-framework';
import {TweetService} from 'TweetService';

@inject(TweetService)
export class Users {
  constructor(tweetService) {
    this.users = tweetService.getUsers();
  }
}
