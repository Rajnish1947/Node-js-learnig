// fundamentals of javaScript:
// arry and object
// function return
// async js coding
// for each loop
var arr=[2,3,4,5,6,7,"rani","pooja"];
arr.forEach((value)=>{
  console.log(value);
})
// map method
var arr2=[{a:"rani",ade:"suman"},1,2,3,5,6,"rani",()=>{
    console.log('array')
}]
console.log('this map')
arr2.map((value)=>{
    console.log(value);
})
var arr3=[1,2,5.3,5,6,7,8,9];

var a= arr3.filter((value)=>{
    if(value>2){
        return true;
    } else{
        return false;
    }
   
})
console.log(a);
// array ye ideex number batata hai 
let arr4=[2,3,5,6,7,8,9,"q"];
console.log('this is index number',arr4.indexOf(8));
 //array ko length find karne ke liye use karte hai 
function Arraylength( a,b,c){

}
console.log("Array ka length hai",Arraylength.length);
console.dir(Arraylength)
