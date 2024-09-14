import { connectDb } from "@/app/lib/connectDb"
import { NextResponse } from "next/server";

export const GET= async()=>{
    const db= await connectDb();
    const user = await db?.collection('users').find().toArray();
    return NextResponse.json(user);
}