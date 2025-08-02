import cloudinary from "@/lib/cloudinary.config";
import { Readable } from "stream";


export function bufferTOStream(buffer:Buffer){
    return Readable.from(buffer);
}

export async function uploadImageToCloudinary(buffer:Buffer,folder='blog-images'){
    return new Promise((resolve,reject)=>{
        const stream=cloudinary.uploader.upload_stream(
            {
                folder,
                resource_type:'image'
            },
            (error,result)=>{
                if(error) reject(error);
                else resolve(result);
            }
        );
        bufferTOStream(buffer).pipe(stream);
    })
}