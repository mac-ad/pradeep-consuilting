import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (slug) {
    try {
      const blog = await prisma.blog.findUnique({
        where: { slug },
      });

      if (!blog) {
        return NextResponse.json({ message: "Blog not found" }, { status: 404 });
      }

      return NextResponse.json(blog, { status: 200 });
    } catch (error) {
      console.error("Error fetching blog by slug:", error);
      return NextResponse.json({ error: "Failed to fetch blog" }, { status: 500 });
    }
  } else {
    try {
      const blogs = await prisma.blog.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });

      return NextResponse.json(blogs, { status: 200 });
    } catch (error) {
      console.error("Error fetching blogs:", error);
      return NextResponse.json({ message: "Failed to fetch blogs" }, { status: 500 });
    }
  }
}


export async function PUT(request:NextRequest){
    try{
         const body=await request.json();
     const{id,title,slug,content,image,metaTitle,metaDescription,seoData}=body;
     if(!id){
        return NextResponse.json({message:"blog id is required.."},{status:400})
     }
     const updatedBlog=await prisma.blog.update({
        where:{id},
        data:{
            title,
            slug,
            content,
            image,
            metaTitle,
            metaDescription,
            seoData,
        }
     }); 
     return NextResponse.json(updatedBlog,{status:200});
    }catch(error){
    console.error("Update blog error:",error);
    console.log("updateblog error: ",error)
    return NextResponse.json({message:'Failed to update blog'},{status:500})
    }
}



export async function POST(request:NextRequest){
  const body=await request.json();
const {title,slug,content,image,authorId,metaTitle,metaDescription,seoData}=body;
if(!title || !slug || !content){
    return NextResponse.json(
        {message:"title, slug and content are required"},
        {status:400}
    );
}
const blog=await prisma.blog.create({
    data:{
        title,
        slug,
        content,
        image,
        authorId,
        metaTitle,
        metaDescription,
        seoData
    }
});
return NextResponse.json(blog,{status:201})
}



export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json({ message: "ID is required to delete blog." }, { status: 400 });
    }

    const deletedBlog = await prisma.blog.delete({
      where: { id },
    });

    return NextResponse.json(deletedBlog, { status: 200 });
  } catch (error) {
    console.error("Delete blog error:", error);
    return NextResponse.json({ message: "Failed to delete blog." }, { status: 500 });
  }
}