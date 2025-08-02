import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from 'bcrypt';

export async function POST() {
     const email="arunchy600@gmail.com";
     const password="hello@123"; 
     const name="Arun Chaudhary";
     const hashedPassword=await bcrypt.hash(password,10); 
     try{
        const user=await prisma.user.create({
        data:{
            email,
            password:hashedPassword,
            name,
        }
     });
     return NextResponse.json(user,{status:201});
     }catch(error){
     console.error("Error creating user: ",error);
     return NextResponse.json({error:"failed to create user"},{status:500});
     }
    
}