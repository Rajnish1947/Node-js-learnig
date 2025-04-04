// npm init -y likhane par ye direct json file bna deta hai bina puche
// jo kuch code are kuch logic define hota hai jise ham apne project me direct use karte hai
// ye ak module jisko ham import kar rahe
//require module ko import karne me sahayta karta hai 
// const { createServer } = require('node:http');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
