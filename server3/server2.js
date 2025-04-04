// const http=require("http");
// http.createServer((req,res)=>{
//     res.write("hi dear");
//     res.end();
// }).listen(2700);

const http = require("http");

function HelpOfFunc(req, res) {
    // res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<h1>that line from function</h1>");
    res.end();
}

const hostname = '127.0.0.1';
const port = 3000;

http.createServer(HelpOfFunc).listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
});

