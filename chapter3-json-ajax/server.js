var http = require('http');
var fs = require('fs');
var path = require('path');
var profiles = require('./profiles');
var index = fs.readFileSync('index.html');

var mimes = {json: "application/json"};

var routes = {
	'profiles': function (format) {
		return output(Object.keys(profiles), format);
	},
	'/profile': function (format, basename) {
		return output(profiles[basename], format, basename);
	}
};

function output(content, format) {
	if (!format || format === 'json') {
		return JSON.stringify(content);
	}
}

http.createServer(function (req, res) {
	var dirname = path.dirname(req.url);
	var extname = path.extname(req.url);
	var basename = path.basename(req.url, extname);
	extname = extname.replace('.',''); // ピリオドを削除します。
	res.setHeader("Content-Type", mimes[extname] || 'text/html');
	if (routes.hasOwnProperty(dirname)) {
		res.end(routes[dirname](extname, basename));
		return;
	}
	if (routes.hasOwnProperty(basename)) {
		res.end(routes[basename](extname));
		return;
	}
	res.end(index);
}).listen(8080);
