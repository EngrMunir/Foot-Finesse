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
