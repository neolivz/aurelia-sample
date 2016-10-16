import {inject} from 'aurelia-framework';
import {TweetService} from 'TweetService';
import {ArrayStore} from  'ArrayStore';

@inject(TweetService, ArrayStore, 'currentUser')
export class Tweets {
  constructor(tweetService, arrayStore, currentUser) {
    this.message = `Happy ${currentUser.getAge()}th Birthday, ${currentUser.getName()}`;
    this.tweetsStore = arrayStore.replaceStore(tweetService.getTweets());
    console.log(this.tweetsStore);
  }
}
