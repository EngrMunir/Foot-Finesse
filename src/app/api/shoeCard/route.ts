import { connectDb } from "@/app/lib/connectDb"
import { NextResponse } from "next/server";
interface Shoe {
    _id: string; 
    id: number;
    category: string;
    shoeName: string;
    price: number;
    discountPrice: number;
    shortDescription: string;
    rating: number;
    image: string;
  }
export const GET = async()=>{
    try {
        const db = await connectDb()
        const shoesCollection = db?.collection<Shoe>('shoes')
        //console.log(shoesCollection)
        const result = await shoesCollection?.aggregate([{ $sample: { size: 6 } } ]).toArray() 
        console.log(result)
        return NextResponse.json(result)
    } catch (error) {
        console.log(error)        
        throw new Error("Failed to fetch random shoes");
    }
}

