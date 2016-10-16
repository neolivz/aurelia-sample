import {TweetService} from 'TweetService';
import {inject} from 'aurelia-framework';

@inject(TweetService)
export class Tweets {
  constructor(tweetService) {
    this.message = "Tweets Come Here";
    this.tweets = tweetService.getTweets();
  }
}
