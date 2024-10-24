import { MongoClient } from 'mongodb';

export async function connectDatabase() {
   const connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_CLUSTER}.8ldgs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
   const client = await MongoClient.connect(connectionString);
   return client;
}