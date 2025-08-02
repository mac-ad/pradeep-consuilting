import { getUserId } from "@/lib/auth";
import { NextResponse } from "next/server";



export async function GET(){
    const userId=await getUserId();
    console.log("userId: ",userId)
    if(!userId){
        return NextResponse.json({message:'unauthorized'},{status:401})
    }
    return NextResponse.json({userId})
}