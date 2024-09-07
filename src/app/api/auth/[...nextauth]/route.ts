// import { NextAuthOptions } from "next-auth";
// import NextAuth from "next-auth/next";
// import CredentialsProvider from "next-auth/providers/credentials"

// export const authOptions :NextAuthOptions ={
//     secret : "AGhh0OLwzJ0RkIQ0GhomkbBRy+gJ9oPp29xgrBkfxfs=",
//     session :{
//         strategy: "jwt",
//         maxAge :30*24*60*60
//     },
//     providers:[
//         CredentialsProvider({
//             credentials:{
//                 email:{},
//                 password:{}
//             },
//             async authorize(credentials){
                
//             }
//         })
//     ]
// }

const handler = NextAuth(authOptions)

export {handler as GET , handler as POST}