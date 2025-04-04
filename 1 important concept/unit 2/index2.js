const http = require('http');
const fs = require('fs');

// Use our file system
const index = fs.readFileSync('index2.html', 'utf-8');
const data = fs.readFileSync('data.json', 'utf-8');

http.createServer((req, res) => {
    console.log('hi this hi from console');
    switch (req.url) {
        case "/":
            res.setHeader('Content-Type', 'text/html');
            res.end(index);
            break;
        case "/json":
            res.setHeader('Content-Type', 'application/json');
            res.end(data);
            break;
        default:
            res.writeHead(404, 'Server is not found');
            res.end();
    }
}).listen(4000,() => {
    console.log('Server is listening on port 4000');
});

