
// or as an es module: dono mese koi use kar le
// import { MongoClient } from 'mongodb'

// Connection URL
// OtherfileMangdb.js
const { MongoClient } = require("mongodb");

// const url = "mongodb://localhost:27017";
const url = "mongodb+srv://kumarrajnish28443:Raj@3454@cluster0.qecwf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


const client = new MongoClient(url);
const dbName = "sample_mflix";

async function dbConnect() {
  await client.connect();
  const db = client.db(dbName);
  return db.collection("users");
}

module.exports = dbConnect;

