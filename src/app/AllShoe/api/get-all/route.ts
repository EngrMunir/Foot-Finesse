import { connectDb } from '@/app/lib/connectDb';
import { NextResponse } from 'next/server';


export const GET = async (req: Request)=>{
    const db = await connectDb()
    const shoesCollection = await db?.collection('shoes')
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get('paze')||'0')
    const size = parseInt(url.searchParams.get('size')||'10')
    const shoes = await shoesCollection?.find().skip(page*size).limit(size).toArray()
    console.log(shoes)
    return NextResponse.json(shoes)
}
