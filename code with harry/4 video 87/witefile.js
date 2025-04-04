//file ko create karne ke writefile func use karte hai
const { error } = require('console');
const fs=require('fs')
console.log('starting')
//asycronics hota hai
// fs.writeFile('rajnish1.txt',"this is first file creation",()=>{
//     console.log('ye check karne ke liye file kab create ho raha')

// });
//reade karne ke liye read file ka use karte 
fs.readFile('rajnish1.txt',(error,data)=>{
    // agar data likhange to ye keval buffer return karega esiliye ese string change kar lenge
    // console.log(error,data)
    console.log(error,data.toString())
})
console.log('last')