// jo module bina import kiye use karte hai ve globale module hota hai
// like console,
const fs=require('fs');
console.log("module ke jariye file create karna sikh rahe hai")
fs.writeFileSync("fileName.txt","ye file create kar dega");
// const other=require('fs');
const fs = require('fs');
fs.writeFileSync('text23.txt', 'this is the method to create the file');

// fs.writeFileSync('SecondFileCreation',"ye dusra file create ")
// console.log('ye hamara directory ka naam prapat ke liye use hota hai', __dirname);
// console.log('ye hamara file ka naam prapat ka hai', __filename);

