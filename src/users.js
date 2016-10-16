import {inject} from 'aurelia-framework';
import {TweetService} from 'TweetService';
import {ArrayStore} from 'ArrayStore';

@inject(TweetService, ArrayStore, 'currentUser')
export class Users {
  constructor(tweetService, arrayStore, currentUser) {
    this.usersStore = arrayStore.replaceStore(tweetService.getUsers());
    this.currentUser = currentUser;
  }
}
