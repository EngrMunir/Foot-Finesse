import { connectDb } from '@/app/lib/connectDb';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const db = await connectDb();
  const blogsCollection = await db?.collection('blogs');
  const blogs = await blogsCollection?.find().toArray();
  return NextResponse.json(blogs);
};
