import { connectDb } from "@/app/lib/connectDb"


export const GET = async ()=>{
    const db = await connectDb()
    const shoesCollection = db?.collection('shoes')
    const shoes = await shoesCollection?.find().toArray()
    console.log(shoes)
    return Response.json({shoes})
}