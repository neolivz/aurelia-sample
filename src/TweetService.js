export class TweetService {
  constructor() {
    this.tweets =  [
      {id:1, message:"Welcome To Twitter!!"},
      {id:2, message:"Welcome To Aurelia!!"},
      {id:3, message:"Aurelia Service!!"},
    ];
    this.users = [
      {id:1, name:'Jishnu Viswanath'},
      {id:2, name:'Vishnu Viswanath'},
      {id:3, name:'Ishyani Mohan'},
    ];
  }

  getTweets(){
    return this.tweets;
  }

  getUsers(){
    return this.users;
  }
}
