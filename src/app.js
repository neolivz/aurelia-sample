export class App {
  constructor() {
    this.message = "Hello Aurelia World";
    this.logo = "http://aurelia.io/images/main-logo.svg";
  }
  configureRouter(config, router){
    this.router = router;
    config.title = 'Tweets';
    config.map([
      { route: '', moduleId: 'twitter/tweets', title: 'Tweets', nav: true },
      { route: 'users', moduleId: 'users/users' },
      { route: 'dashboard', moduleId: 'dashboard/dashboard', title: 'Dashboard', nav: true },
      { route: 'tweet/detail/:tweetId', moduleId: 'twitter/detail', name: 'tweetDetail'}
    ])
  }
}
