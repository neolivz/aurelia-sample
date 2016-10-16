import {inject} from 'aurelia-framework';
import {TweetService} from 'TweetService';
import {ArrayStore} from  'ArrayStore';

@inject(TweetService, ArrayStore)
export class Tweets {
  constructor(tweetService, arrayStore) {
    this.message = "Tweets Come Here";
    this.tweetsStore = arrayStore.replaceStore(tweetService.getTweets());
    console.log(this.tweetsStore);
  }
}
