import { connectToDB, insertDocument } from "@/helpers/db-utils";

async function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;

    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    let client;
    try {
      client = await connectToDB();
    } catch (error) {
      res.status(500).json({ message: "Connect to the database failed!" });
      return;
    }

    try {
      await insertDocument(client, "newsletter", { email });
    } catch (error) {
      res.status(500).json({ message: "insert document failed!" });
      return;
    }

    // client.close();
    res.status(201).json({ message: "Signed up!" });
  }
}

export default handler;
