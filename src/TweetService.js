export class TweetService {
  constructor() {
    this.tweets =  [
      {id:1, message:"Welcome To Twitter!!"},
      {id:2, message:"Welcome To Aurelia!!"},
      {id:3, message:"Aurelia Service!!"},
    ];
    this.users = [];
  }

  getTweets(){
    return this.tweets;
  }

  getUsers(){
    return this.users;
  }
}
