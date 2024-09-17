import { connectDb } from "@/app/lib/connectDb";
import { authOptions } from "@/app/api/utils/AuthOptions";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";


export const POST =async(req:NextRequest):Promise<NextResponse>=>{
    const db =await connectDb()
    const userCollection =await db?.collection("users")
    const userData = await req.json()
    try {
        const session =await getServerSession(authOptions)
        const user = await userCollection?.findOne()
        const updateDoc ={
            $set:{
                ...userData
            }
        }
        const result = await userCollection?.updateOne({email: session?.user?.email},updateDoc) 
        return NextResponse.json(result)
    } catch (error) {
        console.log(error)
        throw new Error ('you have failed')
    }
}