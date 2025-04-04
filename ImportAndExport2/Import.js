//  ye java script ke liye use hota hai
// import {x,y} from './Export';
// that's way follow for node js export
// const/let/var anyName =require(./filename)
// app.js
// app.js
const rajnish = require('./Export');

console.log(rajnish.x, rajnish.y); // Output: 23 56
console.log(rajnish); // Output: { x: 23, y: 56, z: [Function: z] }
console.log(rajnish.x); // Output: 23
console.log(rajnish.y); // Output: 56
console.log(rajnish.z()); // Output: 10
