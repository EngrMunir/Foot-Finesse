import { connectDb } from "@/app/lib/connectDb"
import { NextRequest, NextResponse } from "next/server"

import { getServerSession } from "next-auth"
import { authOptions } from "@/app/utils/AuthOptions"

export const DELETE =async(req:NextRequest):Promise<NextResponse>=>{
    const {id}= await req.json()
        console.log(id)
    try {
        const db = await connectDb()
        const wishlistCollection =db?.collection('wishlist')
        const session = await getServerSession(authOptions)
        if (!session) {
            return NextResponse.json({ message: 'User not authenticated' });
        }
        const result = await wishlistCollection?.deleteOne({id: id,email: session?.user?.email})
        return NextResponse.json(result)
    } catch (error) {
         throw new Error('something went wrong.')
    }

}