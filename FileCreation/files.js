// const fs=require("fs");
//  const path=require('path');
// // //ye file ke path ko directry pe create kare esiliye use kiye hai
// const dirPath = path.join(__dirname, 'files');
// for( let i=0; i<=5;i++){
//     fs.writeFileSync(dirPath+"./hello"+i+".txt","this file contant")
// }



const fs = require("fs");
const path = require("path");

// ye file ke path ko directory pe create kare esiliye use kiye hai ham pahle se directry pe files create kar ke rakha tha
const dirPath = path.join(__dirname, 'files');

// Create the directory if it doesn't exist
// if (!fs.existsSync(dirPath)) {
//     fs.mkdirSync(dirPath);
// }

for (let i = 0; i <= 5; i++) {
    fs.writeFileSync(path.join(dirPath, `hello${i}.txt`), "this file content");
}
