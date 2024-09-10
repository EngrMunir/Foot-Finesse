import { connectDb } from "@/app/lib/connectDb"
import { NextRequest, NextResponse } from "next/server"
import bcrypt from 'bcrypt'

export const POST =async(req:NextRequest):Promise<NextResponse>=>{
    const userData=await req.json() 
    try {
        console.log(userData)
        const db = await connectDb()
        const userCollection = db?.collection('users')
        const exist = await userCollection?.findOne({email: userData.email})
        if(exist){
            return NextResponse.json({ message: "user already exist" }, { status: 400 });
        }
        const hashedPassword = await bcrypt.hashSync(userData.password,14)
        const newUser = {...userData,password: hashedPassword}
        const result = await userCollection?.insertOne(newUser)
        return NextResponse.json(result,{status:200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "something went wrong" }, { status: 400 });
    }
}