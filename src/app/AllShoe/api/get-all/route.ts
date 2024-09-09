import { connectDb } from '@/app/lib/connectDb';
import { NextResponse } from 'next/server';

<<<<<<< HEAD
export const GET = async ()=>{
    const db = await connectDb()
    const shoesCollection = await db?.collection('shoes')
    const shoes = await shoesCollection?.find().toArray()
    return NextResponse.json(shoes)
}
=======
export const GET = async () => {
  const db = await connectDb();
  const shoesCollection = await db?.collection('shoes');
  const shoes = await shoesCollection?.find().toArray();
  // console.log(shoes);
  return NextResponse.json(shoes);
};
>>>>>>> 0eaf4a5c21d38d6d14ac3d989a942f0483de21b8
