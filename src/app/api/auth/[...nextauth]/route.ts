import bcrypt from 'bcrypt' 
import { connectDb } from "@/app/lib/connectDb";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";


 const authOptions: NextAuthOptions = {
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
    GoogleProvider({
        clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string
      }),
      FacebookProvider({
        clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID as string,
        clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET as string
      })
  ],
  callbacks:{
    
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
