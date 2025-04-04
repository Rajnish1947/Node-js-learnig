const http=require('http');
const fs=require('fs');
// that use of our file system 
const index=fs.readFileSync('index.html','utf-8');
const data=fs.readFileSync('data.json','utf-8');


http.createServer((req,res)=>{
    console.log('hi this hi from console');
    
    // jo local host se request send karenge o konsole me dikhaye ga example i did request localhost:4000/dempo then it will in console /demo
    console.log(req.url)
    res.hasHeader('headerstatus','headervalue')
    res.write('<h1>hello</h1>')
    // res.end(data);
    res.end(index);


}).listen(4000);
