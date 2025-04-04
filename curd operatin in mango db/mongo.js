const { MongoClient } = require("mongodb");
// or as an es module: dono mese koi use kar le
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database Name
// eska collection name local
const dbName = "local";

async function getdata() {
  // Use connect method to connect to the server
  let result = await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("new");
  // let response = await collection.find({}).toArray();
  //  jab kisi do ko neend ke anusar find karna
  let response = await collection.find({Address:"bihar"}).toArray();
  console.log(response);
}

getdata();
