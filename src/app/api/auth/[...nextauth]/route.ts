import bcrypt from 'bcrypt' 
import { connectDb } from "@/app/lib/connectDb";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { AdapterUser } from "next-auth/adapters"; 
import { Account, User } from "next-auth"; 
import { Db } from 'mongodb';
import { Session } from "next-auth"; 
import { JWT } from "next-auth/jwt";

interface CustomToken extends JWT {
  image?: string;
  phoneNumber?: string;
  street?: string;
  zip?: string;
  country?: string;
  city?: string;
}


// interface User {
//   name: string;
//   email: string;
//   image: string;
// }

// interface Account {
//   provider: 'google' | 'facebook' | string; 
// }


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
    async signIn(params: { user: User | AdapterUser; account: Account | null }) {
      const { user, account } = params;

      if (account?.provider === 'google' || account?.provider === 'facebook') {
        const { name, image, email } = user;

        try {
          const db= await connectDb();
          const userCollection = db?.collection('users');
          const isExist = await userCollection?.findOne({ email });
          if (!isExist) {
            const result = await userCollection?.insertOne(user);
            return true
          }
        } catch (error) {
          console.error("Error during sign-in:", error);
          throw new Error("Failed to sign in with provider");
        }        
      }
      return true;
    },
    
    async jwt({ token, account, user }: { token: CustomToken; account?: any; user?: User }) {
      // console.log('account',account)
      // console.log('user',user)
      const db: Db | undefined =await connectDb()
      const userCollection = db.collection('users')
      const currentUser = await userCollection.findOne({email:token.email})
      //console.log(currentUser)
        if(currentUser){
          token.image = currentUser?.image
          token.phoneNumber=currentUser?.phoneNumber
          token.street=currentUser?.street
          token.zip=currentUser?.zip
          token.country=currentUser?.country
          token.city=currentUser?.city
        }    
      return token
    },
  async session({ session, token }: { session: Session; token: CustomToken }) {
      //console.log('token',token)
      //console.log(session.user.photoURL)
      session.user.image = token?.image
      session.user.phoneNumber=token.phoneNumber
      session.user.street=token.street
      session.user.zip=token.zip
      session.user.country=token.country
      session.user.city=token.city
      //console.log(session)
      return session
    }
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
