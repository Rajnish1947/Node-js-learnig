// ye import hota hai
 const http = require("http");

http.createServer((req, res) => {
    // res.write(" rom bhaiyo system far denge u") ;
    res.write("<h1> rom bhaiyo system far denge u <h1> or Bol Bhai ") ;
res.end()
 }).listen(2300);
// const http = require("http");

// http.createServer((req, res) => {
//     res.write(
//     "jai jai"
// ) ;
//     res.end();
// }).listen(2300);
