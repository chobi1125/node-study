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
      // var postDataObject = querystring.parse(postData);
      console.log('ユーザーが次のデータをPOSTしました:\n'+postData);
      // res.end('あなたがPOSTしたデータ:\n'+util.inspect(postDataObject));
      res.end('あなたがPOSTしたデータ:\n');
    });
  }
}).listen(8080);
