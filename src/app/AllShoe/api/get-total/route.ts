import { connectDb } from "@/app/lib/connectDb"
import { NextResponse } from "next/server";

export const GET= async()=>{
    const db= await connectDb();
    const count = await db?.collection('shoes').estimatedDocumentCount();
    return NextResponse.json({count});
}