import { connectDb } from "@/app/lib/connectDb"
import { NextResponse } from "next/server"

export const GET = async ()=>{
    const db = await connectDb()
    const shoesCollection = await db?.collection('shoes')
    const shoes = await shoesCollection?.find().toArray()
    console.log(shoes)
    return NextResponse.json({shoes})
}

