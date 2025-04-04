// const dbConnect = require('./OtherfileMangdb.js');

// const update = async () => {
    
//         const db = await dbConnect();
//         // ye data update karne ke liye updateMany bahut sare data ke liye or updateone single data ke liye  function ka  use karte hain
//         const result = await db.updateOne(
//             // jo update karna hota hai use likh dete hai
//             {name:"rani"},{
//             // jo update karne ke baad likhana hai use likhe
//             $set:{name:"rajlakshmi",age:"67"}}
//            );
   
// };

// update();
const dbConnect = require('./OtherfileMangdb.js');

const update = async () => {
    try {
        const db = await dbConnect();
        // ye data update karne ke liye updateMany bahut sare data ke liye or updateOne single data ke liye function ka use karte hain
        const result = await db.updateOne(
            // jo update karna hota hai use likh dete hain
            { name: "rani" },
            {
                // jo update karne ke baad likhna hai use likhe
                $set: { name: "rajlakshmi", age: 67 }
            }
        );
        console.log("Data updated successfully:", result);
    } catch (error) {
        console.error("Error updating data:", error);
    }
};

update();
