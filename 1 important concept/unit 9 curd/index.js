// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();
// //create
// const CreateInMongodb = async () => {

//         await mongoose.connect("mongodb+srv://kumarrajnish28443:dBoxebGh8scNpch2@cluster1.k98w5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1");

//         const userSchema = new mongoose.Schema({
//             Name: String,
//             email: String,
//             mob: String, // Changed to String
//             addres: String,
//             age: Number,
//             regno: Number,
//         });

//         const UserModel = mongoose.model('myrevision', userSchema);

//         // Create a new user
//         let userData = new UserModel({
//             Name: 'sona kumari',
//             mob: '62055115897', // Changed to String
//             addres: 'Rampur Bindalal',
//             email: 'Kumarraj@gmail.com',
//             age: 23,
//         });

//         let result = await userData.save();
//         console.log(result);

//     }
//     //jab check karna ho to un comment kar bari bari se check kar le
//     // CreateInMongodb()
//     const UpdateInMongodb = async () => {
//         try {
//             await mongoose.connect("mongodb+srv://kumarrajnish28443:dBoxebGh8scNpch2@cluster1.k98w5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1");

//             const UserModel = mongoose.model('users', userSchema);

//             // Update
//             let result = await UserModel.updateOne(
//                 { Name: "Rajnish" },
//                 {
//                     $set: { Name: 'Sikander Lodi', age: 20 }
//                 }
//             );

//             console.log('Update Result:', result);
//         } catch (error) {
//             console.error('Error updating data:', error);
//         } finally {
//             await mongoose.disconnect(); // Ensure to disconnect after the operation
//         }
//     };

//     UpdateInMongodb();
// app.listen(4000, function () {
//     console.log('Server is running on port 4000');

// });
// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();

// // Define the user schema outside the functions
// const userSchema = new mongoose.Schema({
//     Name: String,
//     email: String,
//     mob: String,
//     addres: String,
//     age: Number,
//     regno: Number,
// });

// const UserModel = mongoose.model('users', userSchema); // Create the model once

// // Create function
// const CreateInMongodb = async () => {
//     try {
//         await mongoose.connect("mongodb+srv://kumarrajnish28443:dBoxebGh8scNpch2@cluster1.k98w5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1");

//         // Create a new user
//         let userData = new UserModel({
//             Name: 'Sona Kumari',
//             mob: '62055115897',
//             addres: 'Rampur Bindalal',
//             email: 'Kumarraj@gmail.com',
//             age: 23,
//         });

//         let result = await userData.save();
//         console.log('User Created:', result);
//     } catch (error) {
//         console.error('Error creating user:', error);
//     } finally {
//         await mongoose.disconnect(); // Ensure to disconnect after the operation
//     }
// };

// // Update function
// const UpdateInMongodb = async () => {

//         await mongoose.connect("mongodb+srv://kumarrajnish28443:dBoxebGh8scNpch2@cluster1.k98w5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1");

//         // Update
//         let result = await UserModel.updateMany(
//             {
//                 Name:"Rajnish kumar"
//             },
//             {
//                 $set: { Name:"sikandar lodi", age: 20 }
//             }
//         );

//         console.log('Update Result:', result);
//     }

//     const DeleteInMongodb = async () => {
//         try {
//             await mongoose.connect("mongodb+srv://kumarrajnish28443:dBoxebGh8scNpch2@cluster1.k98w5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1");

//             // Delete documents matching the criteria
//             let result = await UserModel.deleteMany({Name:"sikandar lodi", age: 20});

//             console.log('Delete Result:', result);
//         } catch (error) {
//             console.error('Error deleting data:', error);
//         } finally {
//             await mongoose.disconnect(); // Ensure to disconnect after the operation
//         }
//     };

//     const FindInMongodb = async () => {
//         try {
//             await mongoose.connect("mongodb+srv://kumarrajnish28443:dBoxebGh8scNpch2@cluster1.k98w5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1");

//             // Find a document matching the criteria
//             let result = await UserModel.findOne({ Name: "soni kumari" });

//             console.log('find Result:', result);
//         } catch (error) {
//             console.error('Error finding data:', error);
//         } finally {
//             await mongoose.disconnect(); // Ensure to disconnect after the operation
//         }
//     };

//     // Call the function to delete
//     // DeleteInMongodb();

// // Uncomment to test creating a user
// // CreateInMongodb();

// // Uncomment to test updating a user
// // UpdateInMongodb();
// FindInMongodb();

// app.listen(4000, function () {
//     console.log('Server is running on port 4000');
// });

const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Define the user schema
const userSchema = new mongoose.Schema({
  Name: String,
  email: String,
  mob: String,
  addres: String,
  age: Number,
  regno: Number,
});

const UserModel = mongoose.model("users", userSchema); // Create the model once

// MongoDB connection

mongoose.connect(
  "mongodb+srv://kumarrajnish28443:dBoxebGh8scNpch2@cluster1.k98w5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1"
);

// Create function
const CreateInMongodb = async () => {
    

        const UserModel = mongoose.model("users", userSchema);

        // Create a new user instance with the provided user data
        let newUser = new UserModel(userData);

        // Save the new user to the database
        let result = await newUser.save();
        
        console.log('User Created:', result);
}

// Example usage:
const userData = {
    Name: 'sima Kumari',
    mob: '62055115897',
    addres: 'Rampur Bindalal',
    email: 'Kumarraj@gmail.com',
    age: 23,
};



// Update function
const UpdateInMongodb = async () => {
 
    const UserModel = mongoose.model("users", userSchema);
    let result = await UserModel.updateOne(
        { Name: "pooja kumari" },
        { $set: { Name: "Rani kumari" } }
    );
    console.log(result)
}
   ;

// Delete function
const DeleteInMongodb = async () => {
  const UserModel = mongoose.model("users", userSchema);

  let result = await UserModel.deleteOne({
    Name: "Rajnish Kumar",
  });
  console.log(result);
};

// Find function
const FindInMongodb = async () => {
  const UserModel = mongoose.model("users", userSchema);
  let data = await UserModel.findOne({ Name: "soni kumari" });
  console.log(data);
};

// Example usage
const runCRUDOperations = async () => {
  // Uncomment to create a user
 await CreateInMongodb({ userData });

  // Uncomment to update a user
//    await UpdateInMongodb({   Name: "pooja kumari"}, { Name: "Rani kumari"  });

  // Uncomment to delete a user
//   await DeleteInMongodb({ Name: "Rajnish Kumar" });

  // Uncomment to find a user
//   await FindInMongodb({ Name: "soni kumari" });
};

runCRUDOperations();

app.listen(4000, function () {
  console.log("Server is running on port 4000");
});
