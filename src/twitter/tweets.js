import {inject} from 'aurelia-framework';
import {TweetService} from 'services/TweetService';
import {ArrayStore} from  'common/ArrayStore';

@inject(TweetService, ArrayStore, 'currentUser')
export class Tweets {
  constructor(tweetService, arrayStore, currentUser) {
    this.message = `Happy ${currentUser.getAge()}th Birthday, ${currentUser.getName()}`;
    tweetService.getTweets().then(tweets => this.tweetsStore = arrayStore.replaceStore(tweets.statuses));
    console.log(this.tweetsStore);
  }
}
