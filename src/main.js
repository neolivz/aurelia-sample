import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';
import 'bootstrap';
import {UserInfo} from 'common/UserInfo';
import {FacebookPlugin} from 'share/FacebookPlugin';
import {TwitterPlugin} from 'share/TwitterPlugin';
import {GPlusPlugin} from 'share/GPlusPlugin';

LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.logLevel.debug);

export function configure(aurelia) {
  let user = new UserInfo();
  user.setName('Jishnu Viswanath');
  user.setAge(30);
  aurelia.use.instance('currentUser', user);
  aurelia.use.transient("SharePlugins",FacebookPlugin);
  aurelia.use.transient("SharePlugins",TwitterPlugin);
  aurelia.use.transient("SharePlugins",GPlusPlugin);

  aurelia.use.standardConfiguration();
  aurelia.start().then( a=> a.setRoot("app", document.getElementById("app")));
}
