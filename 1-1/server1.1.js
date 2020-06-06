const http = require('http');
const path = require('path');

const pages = [
  {route: '',output: 'TOP'},
  {route: 'about',output: 'about'},
];

const server = http.createServer((request, response) => {
  let lookup = path.basename(decodeURI(request.url));
  pages.forEach(function(page) {
    if(page.route === lookup ) {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end(typeof page.outpuut === "function" ? page.output():page.output);
    }
  });
  if(!response.finished) {
    response.writeHead(404);
    response.end("not found!");
  }
});

server.listen(8080);
