const http = require('http');

var server = http.createServer(
    (request,response)=>{ 
      response.setHeader('Content-Type','text/html');
      response.write('<!DOCTYPE html><html lang="en">');
      response.write('<head><meta charset="utf-8">');
      response.write('<title>Hello</title></head>');
      response.write('<body><h1>Hello Node.js</h1>');
      response.write('<p>文字化けテスト</p>', 'utf8');
      response.write('<p>文字化けテスト</p>');
      response.write('</body></html>');
      response.end();
    }
);
server.listen(3000);