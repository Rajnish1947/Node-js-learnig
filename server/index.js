function HelpOfFunc(req,res){
    res.write("<h1>that line from function<h1>");
res.end();
 }
 const http=require("http");
http.createServer((HelpOfFunc)
).listen(2500);