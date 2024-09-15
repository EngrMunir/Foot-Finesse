import { connectDb } from '@/app/lib/connectDb';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export const GET = async (req: NextRequest):Promise<NextResponse> => {
  try {
    const db = await connectDb();
    const blogsCollection = await db?.collection('blogs');

    // Extract query parameters from the request
    const { searchParams } = new URL(req.url);
    // const category = searchParams.get('category');
    const name = searchParams.get('name');

    // Build the query object for MongoDB
    const query: Record<string, any>  = {};

    // Add filters based on category and name, if they exist
    // if (category) {
    //   query.category = { $regex: category, $options: 'i' }; // case-insensitive
    // }
    if (name) {
      query.title = { $regex: name, $options: 'i' }; // case-insensitive search on title
    }

    // Fetch filtered blogs from the collection
    const blogs = await blogsCollection?.find(query).toArray();

    // Return the filtered blogs as a JSON response
    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching blogs', error }, { status: 500 });
  }
};

// import { connectDb } from '@/app/lib/connectDb';
// import { NextResponse } from 'next/server';
// import { NextRequest } from 'next/server';

// export const GET = async (req: NextRequest) => {
//   try {
//     const db = await connectDb();
//     const blogsCollection = await db?.collection('blogs');

//     // Extract query parameters from the request
//     const { searchParams } = new URL(req.url);
//     const name = searchParams.get('name');

//     // Build the query object for MongoDB
//     const query: any = {};

//     // Add filters based on the name, if it exists
//     if (name) {
//       query.title = { $regex: name, $options: 'i' }; // case-insensitive search on title
//     }

//     // Fetch blogs from the collection
//     const blogs = await blogsCollection?.find(query).toArray();

//     // Return the blogs as a JSON response
//     return NextResponse.json(blogs);
//   } catch (error) {
//     return NextResponse.json({ message: 'Error fetching blogs', error }, { status: 500 });
//   }
// };
