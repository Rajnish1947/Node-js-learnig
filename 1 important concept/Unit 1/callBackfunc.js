// in java script function is one type object
// normal function
// function sum(){
//     return a+b;
// }
// call back function
// function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
//   }
// console me run kare 
function sum(a, b) {
    return a + b;
}
function diff(a, b) {
    return a - b;
}
function calc(fx, a, b) {
    return fx(a, b);
}

console.log(calc(sum, 4, 5)); // This will output 9 hara sum is call back func
console.log(calc(diff, 4, 5)); // here diff is call back function
