const { MongoClient } = require("mongodb");

const url = "mongodb+srv://kumarrajnish28443:Raj%403454@cluster0.qecwf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(url);
const dbName = "sample_mflix";

async function NewdbConnect() {
  await client.connect();
  const db = client.db(dbName);
  return db.collection("users");
}

module.exports = NewdbConnect;