import { connectDb } from "@/app/lib/connectDb";
import { authOptions } from "@/app/utils/AuthOptions";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";


export const POST =async(req:NextRequest):Promise<NextResponse>=>{
    try {
        const db = await connectDb()
        const shoeCollection =db?.collection('shoes')
        const wishlistCollection =db?.collection('wishlist')
        const session = await getServerSession(authOptions)
        if (!session) {
            return NextResponse.json({ message: 'User not authenticated' });
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

export const GET =async()=>{
    try {
        const db = await connectDb()
        const wishlistCollection =db?.collection('wishlist')
        const session = await getServerSession(authOptions)
        if (!session) {
            return NextResponse.json({ message: 'User not authenticated' });
        }
        const result = await wishlistCollection?.find({email: session?.user?.email}).toArray()
        return NextResponse.json(result)
    } catch (error) {
        throw new Error('something went wrong.')
    }
}

