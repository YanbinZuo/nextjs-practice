import { verifyPassword } from "@/lib/auth";
import { connectDatabase } from "@/lib/db";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export const authOptions = {
  // secret: "thequickbrownfox",
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const client = await connectDatabase();
        const usersCollection = client.db("auth").collection("users");
        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          client.close();
          throw new Error("No user found!");
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );
        if (!isValid) {
          client.close();
          throw new Error("Could not log you in!");
        }

        client.close();
        return { email: user.email };
      },
    }),
  ],
};

export default NextAuth(authOptions);
