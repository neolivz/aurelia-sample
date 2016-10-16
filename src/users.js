import {inject, Lazy} from 'aurelia-framework';
import {TweetService} from 'TweetService';
import {ArrayStore} from 'ArrayStore';

@inject(Lazy.of(TweetService), Lazy.of(ArrayStore), 'currentUser')
export class Users {
  constructor(tweetService, arrayStore, currentUser) {
    this.tweetService = tweetService;
    this.arrayStore = arrayStore;
    this.currentUser = currentUser;
  }

  getUsers(){
      this.usersStore = this.arrayStore().replaceStore(this.tweetService().getUsers());
  }
}
