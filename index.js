// // write your code here
// http => require('http');
// port => '8080';
// server => http.createServer(function (req, res){
//     //log msg when request recieved
//     console.log('Recieved ' + req.method + ' request for: ' + req.url)
//     //send headers
//     res.setHeader(200, {'Content-Type': 'text/plain'});

//     //send body response
//     res.end('Hello World');
// });

// server.listen(8080, 'localhost', null, function(){
//     //log msg that server is listening and port 
//     console.log('Server is listening on localhost:8080');
// });

const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
  console.log('Recieved ' + req.method + ' request for: ' + req.url)
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at localhost/8080`);
});