var express = require('express');
var port = process.env.PORT || 5000;
var app = express();
app.use('/', express.static(__dirname + '/'));
app.get('/', function (request, response) {
	response.sendfile(__dirname + '/index.html');
}).listen(port);