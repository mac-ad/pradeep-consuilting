"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { IoArrowForwardOutline } from "react-icons/io5";
import { motion } from "motion/react";
import Link from "next/link";
import { Blog} from "@/app/types/blog";



const BlogsComponent = () => {
  const[blogs,setBlogs]=useState<Blog [] | []>([]);
  useEffect(()=>{
   const fetchBlogs=async()=>{
    try{
     const response=await fetch('/api/blog');
    if(!response.ok){
       throw new Error("error fetching blogs.")
    }
    const data=await response.json();
    setBlogs(data);
    }catch(error){
    console.log("error fetching blogs: ",error)
    }
   }
   fetchBlogs();
  },[])
  return (
    <div className="w-full py-10">
      {/* top hat  */}
      <div className="hidden px-4 lg:px-10 w-full max-w-7xl mx-auto lg:flex items-center gap-6 mb-10">
        <div className="w-full h-[.5px] bg-black"></div>
        <Image src="/assets/hat.svg" alt="Hat" height={80} width={80} />
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-10">
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            type: "spring",
            duration: 0.8,
            stiffness: 100,
            damping: 20,
            delay: 0.3,
          }}
          className="text-2xl lg:text-3xl font-bold text-primary text-center mb-2"
        >
          INSPIRATIONAL BLOGS
        </motion.h1>
        <motion.p
  variants={{
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  }}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.5 }}
  transition={{
    type: "spring",
    duration: 0.8,
    stiffness: 100,
    damping: 20,
    delay: 0.6,
  }}
  className="text-gray-600 max-w-2xl mx-auto text-center mb-10 lg:mb-16"
>
  Explore real stories, expert tips, and powerful journeys from students around the world. Let these blogs inspire your next big move abroad.
</motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs?.map((blog, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                type: "spring",
                duration: 0.6,
                stiffness: 100,
                damping: 20,
                delay: index * 0.3,
              }}
            >
              <BlogCard key={index} blog={blog} />
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button className="border-2 border-primary px-6 py-2 rounded-md text-primary flex items-center gap-x-1 cursor-pointer font-bold relative overflow-hidden group">
            <Link
              href="/blogs"
              className="flex gap-x-2  items-center relative z-10 transition-colors duration-300 group-hover:text-white"
            >
              See More{" "}
              <IoArrowForwardOutline className="text-primary group-hover:text-white" />
            </Link>
            <span className="absolute inset-0 z-0 w-0 h-full left-0 bg-gradient-to-r from-[#3D03FA] to-secondary  transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogsComponent;
