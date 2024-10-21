import { connectToDB, findComment, insertDocument } from "@/helpers/db-utils";

async function handler(req, res) {
  const eventId = req.query.eventId;

  let client;
  try {
    client = await connectToDB();
  } catch(error) {
    res.status(500).json({message: "connect to the database failed!"})
    return;
  }

  if (req.method === "POST") {
    const { email, name, text } = req.body;
    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      // client.close();
      return;
    }

    // mongodb will automatically create an id with name: _id
    const newComment = {
      email,
      name,
      text,
      eventId,
    };
    try {
      const result = await insertDocument(client, "comments", newComment);
      console.log("new comment result: ", result);
      res.status(201).json({ message: "Added comment.", comment: newComment });
    } catch(error) {
      res.status(500).json({message: "insert comment failed!"})
    }
  }

  if (req.method === "GET") {
    try {
      const result = await findComment(client, "comments", {eventId}, {_id: -1})
      console.log("get comments results: ", result)
      res.status(201).json({ message: "Success", comments: result });
    } catch(error) {
      res.status(500).json({message: "find comment failed!"})
    }
  }

  //  remove all client.close() calls from your code to take advantage of MongoDB's "connection pooling" 
  // client.close();
}

export default handler;
