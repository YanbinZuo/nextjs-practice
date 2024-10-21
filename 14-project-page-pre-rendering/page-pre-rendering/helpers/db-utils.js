import { MongoClient } from "mongodb";

export async function connectToDB() {
  const client = await MongoClient.connect(
    "mongodb+srv://ybzuo2:6rE7DYWb1ph2hpjI@cluster0.8ldgs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
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