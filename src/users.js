import {inject} from 'aurelia-framework';
import {TweetService} from 'TweetService';
import {ArrayStore} from 'ArrayStore';

@inject(TweetService, ArrayStore)
export class Users {
  constructor(tweetService, arrayStore) {
    this.usersStore = arrayStore.replaceStore(tweetService.getUsers());
  }
}
