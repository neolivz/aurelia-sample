import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {TweetService} from 'services/TweetService';
import {ArrayStore} from  'common/ArrayStore';

@inject(Router, TweetService, ArrayStore, 'currentUser')
export class Tweets {
  constructor(router, tweetService, arrayStore, currentUser) {
    this.router = router;
    this.message = `Happy ${currentUser.getAge()}th Birthday, ${currentUser.getName()}`;
    tweetService.getTweets().then(
      tweets => this.tweetsStore = arrayStore.replaceStore(tweets.statuses)
    );
    console.log(this.tweetsStore);
  }
  generateRoute(id){
    return this.router.generate('tweetDetail', {tweetId:  id});
  }
}
