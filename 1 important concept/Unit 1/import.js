//khud se script bna sakte "start":"nodemon fileName"
//file ko run ke liye npm run start like
//or pahle tarika se bhi run kar sakte hai nodemon filename
//- ES Module
// import { sum, diff } from './export.js';

// console.log(sum(5, 6), diff(7, 3));

//without module
// - CommonJS Module
const lib = require('./export');

console.log(lib.sum(5, 6), lib.diff(7, 3));
