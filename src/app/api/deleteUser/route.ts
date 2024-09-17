import { connectDb } from "@/app/lib/connectDb";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async(req:NextRequest):Promise<NextResponse>=>{
const db = await connectDb();
const userCollection = await db?.collection('users');
const {user_id} = await req.json();

console.log('ID',user_id)

}