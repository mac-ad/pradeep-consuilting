import  prisma  from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { notFound } from "next/navigation";
import { BiCalendar, BiUser } from "react-icons/bi";
import HtmlContent from "@/components/htmlcontentloader";
import { GoDotFill } from "react-icons/go";


export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const Params = await params;
  const slug = Params.slug;

  const blog = await prisma.blog.findUnique({
    where: { slug: slug },
    include:{author:true}
  });

  const relatedBlogs=await prisma.blog.findMany({
  where:{
  slug:{
    not:slug
  }
  },
  orderBy:{
    createdAt:"desc"
  },
  take:4
});
  
  //related post  
 console.log("blog: ",blog);
  if (!blog) {
    notFound();
  }
  const wordcount = blog.content.split(" ").length;
  const readingTime = Math.ceil(wordcount / 200);
  
  return (
    <article className="w-full md:py-1">
      <div className="max-w-7xl mx-auto px-4 lg:px-10 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3 w-full">
          <Image
            src={blog?.image ?? '/fallback-image.png'}
            alt="Blog Image"
            height={300}
            width={400}
            className="w-full h-auto rounded-lg"
          />
          <div className="mt-4">
            <h1 className="text-4xl font-extrabold">{blog.title}</h1>
            <div className="text-gray-600 text-base mt-2 flex justify-between">
              <span className="text-xs md:text-base flex justify-center items-center gap-x-3">
                <BiUser />
                {blog?.author?.name}
                <span className="flex justify-center items-center gap-x-3">
                  <GoDotFill />
                  {readingTime} min read
                </span>
              </span>
              <span className="text-xs md:text-base flex justify-center items-center gap-x-3">
                <BiCalendar /> {blog.createdAt.toDateString()}
              </span>
            </div>
          </div>
          <div className="mt-10">
            <HtmlContent content={blog.content} />
          </div>
        </div>

        {/* Related Blogs */}
        <div className="lg:w-1/3 w-full">
          <h2 className="text-xl font-semibold mb-4">Related Blogs</h2>
          <div className="space-y-2 border-2 p-3 rounded-lg">
            {/* card  */}
            {relatedBlogs.length>0? relatedBlogs?.map((related) => (
              <div
                key={related.id}
                className="p-2 flex gap-x-3 border-b md:border-0 border-gray-300"
              >
                <div className="h-20 w-28">
                  <Image
                    src={related.image ?? '/fallback-image.png'}
                    alt="Blog Image"
                    height={100}
                    width={100}
                    className="w-full h-full object-cover rounded-sm"
                  />
                </div>
                <div>
                  <h1 className="text-base md:text-lg font-medium hover:text-primary">
                    <Link href="#">{related.title}</Link>
                  </h1>
                  <span className="text-xs md:text-sm">{new Date(related.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            )) : <p>No Blogs to show</p>}
          </div>
        </div>
      </div>
    </article>
  );
}
