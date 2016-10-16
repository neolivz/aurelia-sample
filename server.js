var express = require("express");
var app = express();

app.use(express.static('./'));

var server = app.listen(9240, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server Started http://%s:%s', host, port);
} )
