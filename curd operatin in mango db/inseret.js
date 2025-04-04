const dbConnect = require('./OtherfileMangdb.js');

const insert = async () => {
    
        const db = await dbConnect();
        // ye data insert karne ke liye insertMany bahut sare data ke liye or insertone single data ke liye  function ka  use karte hain
        const result = await db.insertMany([{
            Name: "pooja",
            address: "bihar",
            age: 34
        },{
            Name: "rani2",
            address: "bihar",
            age: 34
        }]);
   
};

insert();
// const dbConnect = require('./OtherfileMangdb.js');

// const insert = async () => {
//     try {
//         const db = await dbConnect();
//         // ye data insert karne ke liye insertMany function use karte hain
//         const result = await db.insertMany([{
//             Name: "pooja",
//             address: "bihar",
//             age: 34
//         }]);
//         console.log("Data inserted successfully:", result);
//     } catch (error) {
//         console.error("Error inserting data:", error);
//     }
// };

// insert();

