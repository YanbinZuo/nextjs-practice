import { MongoClient } from "mongodb";

export async function connectToDB() {
  const connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_CLUSTER}.8ldgs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  const client = await MongoClient.connect(connectionString);
  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db("events");
  const result = await db.collection(collection).insertOne(document);
  return result;
}

export async function findComment(client, collection, findObj, sort) {
  const db = client.db("events");
  const result = await db.collection(collection).find(findObj).sort(sort).toArray();
  return result;
}