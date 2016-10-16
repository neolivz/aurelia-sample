import  {tweets} from 'services/tweets'

export class TweetService {
  constructor() {
  }

  getTweets(){
    return new Promise( (resolve, reject) => {
      if(!this.tweets){
        this.tweets = tweets;
      }
      setTimeout(() => {
        resolve(this.tweets);
      }, 2000);
    });
  }

  getUsers(){
    return this.users;
  }
}
