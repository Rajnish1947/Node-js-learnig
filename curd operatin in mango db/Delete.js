const dbConnect = require('./OtherfileMangdb.js');

const deleteData = async () => {
    try {
        const db = await dbConnect();
        // Use deleteOne to delete a single document 
        const result = await db.deleteOne({ name: "rajlakshmi" });
        console.log("Data deleted successfully:", result);
    } catch (error) {
        console.error("Error deleting data:", error);
    }
};

deleteData();
// const dbConnect = require('./OtherfileMangdb.js');

// const deleteData = async () => {
//     try {
//         const db = await dbConnect();
//         // Use deleteMany to delete multiple documents
//         const result = await db.deleteMany({ address: "bihar" });
//         console.log("Data deleted successfully:", result);
//     } catch (error) {
//         console.error("Error deleting data:", error);
//     }
// };

// deleteData();

