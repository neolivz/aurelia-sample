import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';
import 'bootstrap';
import {UserInfo} from 'UserInfo';

LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.logLevel.debug);

export function configure(aurelia) {
  let user = new UserInfo();
  user.setName('Jishnu Viswanath');
  user.setAge(30);
  aurelia.use.instance('currentUser', user);
  aurelia.use.standardConfiguration();
  aurelia.start().then( a=> a.setRoot("app", document.getElementById("app")));
}
