http => require('http');
port => 8080;

const server = http.createServer((req, res) => {
  console.log('Recieved ' + req.method + ' request for: ' + req.url)
  res.statusCode = 200;
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at localhost/8080`);
});