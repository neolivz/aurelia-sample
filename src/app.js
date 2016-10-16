export class App {
  constructor() {
    this.message = "Hello Aurelia World";
    this.logo = "http://aurelia.io/images/main-logo.svg";
  }
  configureRouter(config, router){
    this.router = router;
    config.title = 'Tweets';
    config.map([
      { route: '', moduleId:'twitter/tweets'},
      { route: 'users', moduleId:'users/users'},
    ])
  }
}
