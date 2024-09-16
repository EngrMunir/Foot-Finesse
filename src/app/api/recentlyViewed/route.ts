import { connectDb } from '@/app/lib/connectDb';
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

// POST method for adding a product to recently viewed
export const POST = async (request: Request) => {
  const db = await connectDb();
  const recentlyViewedCollection = db?.collection('recentlyViewed');

  try {
    const { email, productId } = await request.json();

    if (!email || !productId) {
      return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
    }

    // Find user
    const userDocument = await recentlyViewedCollection?.findOne({ email });

    if (userDocument) {
      //  update the recently viewed array
      const recentlyViewedProducts = userDocument.recentlyViewed || [];

      // Remove old entry if it exists
      const filteredProducts = recentlyViewedProducts.filter(
        (id: string | number) => id !== productId
      );

      // Add the new product ID
      filteredProducts.unshift(productId);

      // Update the user document
      await recentlyViewedCollection?.updateOne(
        { email },
        { $set: { recentlyViewed: filteredProducts } }
      );
    } else {
      // Create a new user document with the recently viewed product
      await recentlyViewedCollection?.insertOne({
        email,
        recentlyViewed: [productId],
      });
    }

    return NextResponse.json({ message: 'Product added to recently viewed' });
  } catch (error) {
    console.error('Error adding recently viewed:', error);
    return NextResponse.json({ error: 'Error adding recently viewed' }, { status: 500 });
  }
};

// GET method for fetching recently viewed products
export const GET = async (request: Request) => {
  const db = await connectDb();
  const recentlyViewedCollection = db?.collection('recentlyViewed');
  const shoesCollection = db?.collection('shoes');

  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Fetch the user document
    const userDocument = await recentlyViewedCollection?.findOne({ email });

    if (userDocument && userDocument.recentlyViewed?.length > 0) {
      const recentlyViewedIds = userDocument.recentlyViewed;

      // Convert the array of IDs to ObjectIds if necessary (assuming `recentlyViewed` contains valid product IDs)
      const objectIds = recentlyViewedIds.map((id: string | number) => {
        return typeof id === 'string' ? new ObjectId(id) : id; // Adjust if `recentlyViewed` contains numbers
      });

      // Fetch product details from the `shoes` collection
      const products = await shoesCollection?.find({ id: { $in: objectIds } }).toArray();

      return NextResponse.json(products || []);
    } else {
      // Return empty array if no recently viewed products
      return NextResponse.json([]);
    }
  } catch (error) {
    console.error('Error fetching recently viewed products:', error);
    return NextResponse.json({ error: 'Error fetching recently viewed products' }, { status: 500 });
  }
};
