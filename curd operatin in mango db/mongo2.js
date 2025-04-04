//import 
const dbConnect=require('./OtherfileMangdb.js')
//by promise Handle
// dbConnect().then((resp)=>{
//     resp.find({name:'rani'}).toArray((data)=>{
//         console.warn(data)

//     })

// });
//by asinc await


const main = async () => {
  let collection = await dbConnect();
// jab kisi data ko serch karna ho  
let data = await collection.find({Address:"bihar"}).toArray();
// let data = await collection.find().toArray();
  console.warn(data);
};

main();
