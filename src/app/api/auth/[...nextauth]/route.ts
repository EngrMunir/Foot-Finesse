const bcrypt = require("bcrypt");
import { connectDb } from "@/app/lib/connectDb";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  secret: "AGhh0OLwzJ0RkIQ0GhomkbBRy+gJ9oPp29xgrBkfxfs=",
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        if (!email || !password) {
          return null;
        }
        const db = await connectDb();
        const userCollection = db?.collection("users");
        const currentUser = await userCollection?.findOne({ email: email });
        if (!currentUser) {
          return null;
        }
        const passwordMatch = bcrypt.compareSync(
          password,
          currentUser.password
        );
        if (!passwordMatch) {
          return null;
        }
        return {
            id: currentUser._id.toString(), 
            email: currentUser.email,
            name: currentUser.name,
          };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
