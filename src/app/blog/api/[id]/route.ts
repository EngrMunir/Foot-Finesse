import { connectDb } from '@/app/lib/connectDb';
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

interface Params {
  params: {
    id: string;
  };
}

export const GET = async (request: Request, { params }: Params) => {
  const db = await connectDb();
  const blogsCollection = db?.collection('blogs');

  try {
    // Convert params.id to ObjectId
    const blog = await blogsCollection?.findOne({ _id: new ObjectId(params.id) });

    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error('Error fetching the blog:', error);
    return NextResponse.json({ error: 'Error fetching the blog' }, { status: 500 });
  }
};
