import { connectDb } from '@/app/lib/connectDb';
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

interface Params {
  params: {
    id: string;
  };
}

// GET method for fetching single blog and its comments
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

// POST method for adding a new comment to the blog
export const POST = async (request: Request, { params }: Params) => {
  const db = await connectDb();
  const blogsCollection = db?.collection('blogs');

  try {
    const { comment, user, userImage } = await request.json();

    // Convert params.id to ObjectId
    const blog = await blogsCollection?.findOne({ _id: new ObjectId(params.id) });

    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    // Add the comment to the blog's comments array
    const updatedBlog = await blogsCollection?.updateOne(
      { _id: new ObjectId(params.id) },
      {
        $push: {
          comments: {
            text: comment,
            user: user || 'Anonymous',
            userImage:
              userImage ||
              'https://i.ibb.co.com/HTR5dpk/16-168770-user-iconset-no-profile-picture-icon-circle-clipart.jpg',
            date: new Date(),
          },
        },
      }
    );

    if (updatedBlog.modifiedCount === 1) {
      return NextResponse.json({ message: 'Comment added successfully' });
    } else {
      return NextResponse.json({ error: 'Failed to add comment' }, { status: 500 });
    }
  } catch (error) {
    console.error('Error adding comment:', error);
    return NextResponse.json({ error: 'Error adding comment' }, { status: 500 });
  }
};
