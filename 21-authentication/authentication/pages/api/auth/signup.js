import { hashPassword } from "@/lib/auth";
import { connectDatabase } from "@/lib/db";

export default async function handler(req, res) {
  if(req.method !== "POST") {
    return;
  }
  const { email, password } = req.body;
  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      message:
        "Invalid input - password should also be at least 7 characters long.",
    });
    return;
  }

  const client = await connectDatabase();
  const db = client.db("auth");

  const userExist = await db.collection("users").findOne({email});
  if(userExist) {
    res.status(422).json({message: "User exists already!"})
    client.close();
    return;
  }
  
  const hashedPassword = await hashPassword(password);
  const result = await db.collection("users").insertOne({
    email,
    password: hashedPassword,
  });
  res.status(201).json({message: "Created user!"})
  client.close();
}
