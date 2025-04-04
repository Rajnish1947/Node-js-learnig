//pahle http ko import karte hai
//data chahe to esi file pass kar sakte or dusre file me pass kar import kar dete hai
// const http = require('http');

// http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     res.write(JSON.stringify("ram shaya good person"));
//     res.end();
// }).listen(5000);
//help data file
//data file ko import karte hai
const http = require('http');
//yaha import kar denge
const data=require('./data');
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(5000);