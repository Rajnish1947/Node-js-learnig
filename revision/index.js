const http=require('http');
http.createServer((req,res)=>{
res.write('hello ji that is ourv first server');
res.end();
}).listen(45000)