import { NextResponse,NextRequest } from 'next/server';
import { uploadImageToCloudinary } from '@/utils/uploadToCloudinary';
import { CloudinaryUploadResult } from '@/app/types/cloudinary';
export async function POST(request:NextRequest){
 try{
   const formData= await request.formData();
   const file=formData.get('image') as File;
   if(!file){
    return NextResponse.json({message:"No file uploaded"},{status:400})
   }
   const buffer=Buffer.from(await file.arrayBuffer());
   const result:CloudinaryUploadResult=await uploadImageToCloudinary(buffer)as CloudinaryUploadResult;
   return NextResponse.json({url:result.secure_url},{status:200})
 }catch(error){
  console.log(error);
  return NextResponse.json({message:'upload failed'},{status:500})
 }

}





