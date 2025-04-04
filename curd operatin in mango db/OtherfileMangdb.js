
// or as an es module: dono mese koi use kar le
// import { MongoClient } from 'mongodb'

// Connection URL
// OtherfileMangdb.js
const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "local";

async function dbConnect() {
  await client.connect();
  const db = client.db(dbName);
  return db.collection("new");
}

module.exports = dbConnect;

