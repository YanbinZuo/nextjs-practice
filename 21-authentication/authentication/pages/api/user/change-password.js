import { hashPassword, verifyPassword } from "@/lib/auth";
import { connectDatabase } from "@/lib/db";
import { getSession } from "next-auth/client";

async function handler(req, res) {
  if (req.method != "PATCH") {
    return;
  }

  const session = await getSession({req: req});
  console.log("SESSION: ", session)
  if (!session) {
    console.log("no session")
    res.status(401).json({ message: "Not authenticated!" });
    return;
  }

  const userEmail = session.user.email;
  const oldPassword = req.body.oldPassword;
  const newPassword = req.body.newPassword;

  const client = await connectDatabase();
  const usersCollection = client.db("auth").collection("users");
  const user = await usersCollection.findOne({ email: userEmail });
  if (!user) {
    res.status(404).json({ message: "User not found" });
    client.close();
    return;
  }

  const currentPassword = user.password;
  const passwordsAreEqual = await verifyPassword(oldPassword, currentPassword);

  if (!passwordsAreEqual) {
    res.status(403).json({ message: "Invalid password." });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(newPassword);
  const result = await usersCollection.updateOne(
    { email: userEmail },
    { $set: { password: hashedPassword } }
  );
  client.close();
  res.status(200).json({ message: "Password updated!" });
}

export default handler;
