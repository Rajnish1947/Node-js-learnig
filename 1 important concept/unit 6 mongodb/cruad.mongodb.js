// ye process hai direct data put karne ka yaya jo data base create karna hai uska naam likhe hai

// use('cruddb')
// collection ka khud se naam diye hai naya create kar rahe hai
// db.createCollection('thisCollecname')
// db.thisCollecname.insertOne([{
//     name:"rajnish",
//     age:34,
//     Address:"rampur bindalal",
//     mob:6205115897
// }])
// comment kiye ko run karne par do bara insetrt ho jaiyega
//dusra collection create kar rahe same dbs me
// db.createCollection('friends')
// db.friends.insertMany([[
//     {
//         "name": "Rajnish",
//         "age": 34,
//         "address": "Rampur Bindalal",
//         "mob": 6205115897
//     },
//     {
//         "name": "Anjali",
//         "age": 28,
//         "address": "Lucknow",
//         "mob": 9876543210
//     },
//     {
//         "name": "Vikram",
//         "age": 30,
//         "address": "Delhi",
//         "mob": 9988776655
//     },
//     {
//         "name": "Sneha",
//         "age": 26,
//         "address": "Mumbai",
//         "mob": 8765432109
//     },
//     {
//         "name": "Rohit",
//         "age": 32,
//         "address": "Kolkata",
//         "mob": 9123456780
//     },
//     {
//         "name": "Pooja",
//         "age": 29,
//         "address": "Chennai",
//         "mob": 7654321098
//     },
//     {
//         "name": "Karan",
//         "age": 31,
//         "address": "Bangalore",
//         "mob": 1234567890
//     },
//     {
//         "name": "Neha",
//         "age": 27,
//         "address": "Hyderabad",
//         "mob": 2345678901
//     },
//     {
//         "name": "Arjun",
//         "age": 35,
//         "address": "Ahmedabad",
//         "mob": 3456789012
//     },
//     {
//         "name": "Meera",
//         "age": 33,
//         "address": "Pune",
//         "mob": 4567890123
//     }
// ]
// ])
// let a=db.friends.find({
//     age:30});
// console.log(a);
use('cruddb')
db.createCollection('friends')
const a =db.friends.find({ age: 30 })
console.log(a);
