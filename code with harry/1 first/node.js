// package json ko create karne ke liye npm init likhate
//jab ham kisko github par upload karte hai to module file ko nahi upload karte hai 
//code ko run karne ke liye npm intall kar lete bus ye khood dowload kar leta jo chahiye 
const { createServer } = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});