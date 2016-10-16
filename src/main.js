import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';
import 'bootstrap';

LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.logLevel.debug);

export function configure(aurelia) {
    aurelia.use.standardConfiguration();
    aurelia.start().then( a=> a.setRoot("app", document.getElementById("app")));
}
