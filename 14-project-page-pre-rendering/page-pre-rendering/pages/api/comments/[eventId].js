function handler(req, res) {
  const eventId = req.query.eventId;

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
      return;
    }

    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };
    console.log(newComment);
    res.status(201).json({ message: "Added comment.", comment: newComment });
  }

  if (req.method === "GET") {
    const dummyLists = [
      { id: "c1", name: "Max", text: "first comment" },
      { id: "c2", name: "Jack", text: "second comment" },
    ];
    res.status(201).json({ message: "Success", comments: dummyLists });
  }
}

export default handler;
