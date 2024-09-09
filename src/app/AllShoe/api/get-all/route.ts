<<<<<<< HEAD
import { connectDb } from "@/app/lib/connectDb"
import { NextResponse } from "next/server"
=======
import { connectDb } from '@/app/lib/connectDb';
import { NextResponse } from 'next/server';
>>>>>>> 0141ca45a30885e73d699e17e8468692b8710c09

export const GET = async ()=>{
    const db = await connectDb()
    const shoesCollection = await db?.collection('shoes')
    const shoes = await shoesCollection?.find().toArray()
    return NextResponse.json(shoes)
}
<<<<<<< HEAD

=======
>>>>>>> 0141ca45a30885e73d699e17e8468692b8710c09
