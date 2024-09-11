import { connectDb } from "@/app/lib/connectDb";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export const POST=async(req:NextRequest):Promise<NextResponse> =>{
    const db= await connectDb()
    const userCollection = await db?.collection("users")
    const image =await req.json()
    //console.log(image)
    try {
        const session = await getServerSession(authOptions)
        const updateDoc ={
            $set:{
                image: image
            }
        }
       const result = await userCollection?.updateOne({email: session?.user?.email},updateDoc) 
       return NextResponse.json(result)
    } catch (error) {
        console.log(error)
        throw new Error("you have done something wrong.")
    }
}