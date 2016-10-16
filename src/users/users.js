import {inject, Lazy, All} from 'aurelia-framework';
import {TweetService} from 'twitter/TweetService';
import {ArrayStore} from 'common/ArrayStore';

@inject(Lazy.of(TweetService), Lazy.of(ArrayStore), All.of('SharePlugins'), 'currentUser')
export class Users {
  constructor(tweetService, arrayStore, sharePlugins, currentUser) {
    this.tweetService = tweetService;
    this.arrayStore = arrayStore;
    this.currentUser = currentUser;
    this.sharePlugins = sharePlugins;
  }

  getUsers(){
      this.usersStore = this.arrayStore().replaceStore(this.tweetService().getUsers());
  }

  share(){
    this.sharePlugins.forEach((plugin) => plugin.share());
  }
}
