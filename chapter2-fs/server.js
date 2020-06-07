const http = require('http');
const querystring = require('querystring');
const util = require('util');
const form = require('fs').readFileSync('form.html','utf8');


http.createServer((req, res) => {
  if(req.method === "GET") {
    res.writeHead(200, {'Content-Type': "text/html; charset=utf-8"});
    res.end(form);
  }
  if(req.method === "POST") {
    let postData ='';
    req.on('data', function(chunk) {
      postData += chunk;
    }).on('end', function(){
      var postDataObject = querystring.parse(postData);
      // res.setHeader('Content-Type','text/html');
      // res.write('<!DOCTYPE html><html lang="en">');

      res.write('<head><meta charset="utf-8"><title>Hello</title></head>');
      res.write('<body><h1>Hello Node.js</h1>');
      res.write('<p>文字化けテスト</p>', 'utf8');
      res.write('<p>文字化けテスト</p>');
      res.write('取得PostData:'+util.inspect(postDataObject));
      res.write('</body></html>');
      res.write('取得getPOSTdata：'+postData);
      // res.write(postData);
      // res.write(postDataObject);
      res.end();
    });
  }
}).listen(8081);
