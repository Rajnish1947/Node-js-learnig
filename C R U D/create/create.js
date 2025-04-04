// ye root pe file create karega
// const fs=required("fs");
// fs.writeFileSync("fileName.txt","ye file create kar dega");
var fs = require('fs');

//create a file named mynewfile1.txt:
// by append
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});