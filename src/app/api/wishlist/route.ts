import { connectDb } from "@/app/lib/connectDb";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export const POST =async(req:NextRequest):Promise<NextResponse>=>{
    try {
        const db = await connectDb()
        const shoeCollection =db?.collection('shoes')
        const wishlistCollection =db?.collection('wishlist')
        const session = await getServerSession(authOptions)
        if (!session) {
            return NextResponse.json({ message: 'User not authenticated' }, { status: 401 });
        }
        const id =await req.json()
        console.log(id)   
        const shoe = await shoeCollection?.findOne({id: id})
        console.log(shoe)
        const existingShoe = await wishlistCollection?.findOne({
            email :session?.user?.email,
            id : shoe?.id
        }) 
        if(!existingShoe){
            const result = await wishlistCollection?.insertOne({
                ...shoe,  
                email: session?.user?.email,  
                addedAt: new Date()
            })
            return NextResponse.json({success: result})
        }
        return NextResponse.json({message: 'shoe already exist'})
    } catch (error) {
        console.log(error)
        throw new Error('something went wrong.')
    }
}