//esko import karte q hamese package ke roop me install kiye
// const mongoose=require('mongoose');

// const main=async()=>{
//     // yaha pe mangodb ke data ko connect kar rahe

//     await mongoose.connect("mongodb://localhost:27017/local,student");
//     //collection name 
// const studentSchema=new mongoose.Schema({
//     // ye data ko save karega othe nahi hame yaha pe jo data pass karenge vahi pass hoga 
//     name:String,
//     Age:Number,
//     // yaha pe reg number nahi defined kiya hai to to vaha pe excute nahi hoga or pass nahi hoga 
//     reg:Number
// });
// //collection name same hona chahiye
// const studentModel=mongoose.model('student',studentSchema);
// let data=new studentModel({name:'rajnish',Age:23,reg:45678980});
// let result=await data.save();
// console.log(result)
// }
// main();
const mongoose = require('mongoose');

const main = async () => {
    try {
        // Connecting to MongoDB
        await mongoose.connect("mongodb://localhost:27017/local", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');

        // Defining the schema
        const studentSchema = new mongoose.Schema({
            name: String,
            Age: Number,
            reg: Number
        });

        // Creating the model
        const studentModel = mongoose.model('student', studentSchema);

        // Creating a new student document
        let data = new studentModel({ name: 'rajnish', Age: 23, reg: 45678980 });
        let result = await data.save();
        console.log('Document saved:', result);
    } catch (error) {
        console.error('Error connecting to MongoDB or saving document:', error);
    }
};

main();
