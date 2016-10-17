import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {TweetService} from 'services/TweetService';
import {ArrayStore} from  'common/ArrayStore';

@inject(Router, TweetService, ArrayStore, 'currentUser')
export class Tweets {
  constructor(router, tweetService, arrayStore, currentUser) {
    this.router = router;
    this.tweetService = tweetService;
    this.arrayStore = arrayStore;
    this.currentUser = currentUser;
  }
  activate(){
    this.message = `Happy ${this.currentUser.getAge()}th Birthday, ${this.currentUser.getName()}`;
    return this.tweetService.getTweets().then(
      tweets => this.tweetsStore = this.arrayStore.replaceStore(tweets.statuses)
    );
  }
  generateRoute(id){
    return this.router.generate('tweetDetail', {tweetId:  id});
  }
}
