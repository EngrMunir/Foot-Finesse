<<<<<<< HEAD
import { connectDb } from '@/app/lib/connectDb';

export const GET = async () => {
  try {
    const db = await connectDb();
    const shoesCollection = db?.collection('shoes');
    const shoes = shoesCollection?.find();
    console.log(shoes);
    return Response.json({ shoes });
  } catch (error) {
    console.log(error);
  }
};
=======
import { connectDb } from "@/app/lib/connectDb"
import { NextResponse } from "next/server"

export const GET = async ()=>{
    const db = await connectDb()
    const shoesCollection = await db?.collection('shoes')
    const shoes = await shoesCollection?.find().toArray()
    console.log(shoes)
    return NextResponse.json({shoes})
}
>>>>>>> e96977f4f19ced450e434b55cd01d18ffbfa6a42
