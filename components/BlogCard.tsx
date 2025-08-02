"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoChevronForwardSharp } from "react-icons/io5";
import { useClient } from "@/hooks/use-client";
// import HtmlContent from "./htmlcontentloader";
// import { htmlToText } from 'html-to-text';

interface BlogTypes {
 id:string;
  image:string;
  title:string;
  content:string;
  createdAt:string;
  slug:string;
}

const BlogCard = ({ blog }: { blog: BlogTypes }) => {
  const isClient = useClient();
  
  return (
    <div className="flex flex-col border border-primary rounded-xl overflow-hidden">
      <Image
        src={blog.image || "/assets/blogimagesmaple.jpg"}
        alt="Blog Image"
        height={200}
        width={300}
        className="w-full h-62 object-cover"
      />
      <div className="flex flex-col justify-start space-y-2 p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold hover:text-primary">
            <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
          </h1>
          <span className="text-xs text-gray-500">
             {isClient ? new Date(blog.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }) : blog.createdAt}
          </span>
        </div>
        <span className="text-black/80" >
        {/* <HtmlContent content={blog.content} /> */}
        {/* {htmlToText(blog.content)} */}
        </span>
        <button className="w-fit py-1 px-3 border rounded-full text-xs flex items-center gap-x-1 hover:border-primary hover:text-primary transition-all duration-100 ease-in-out">
          <Link href={`/blogs/${blog.slug}`}>Learn More</Link> <IoChevronForwardSharp />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
