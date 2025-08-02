"use client";

import BlogCard from "@/components/BlogCard";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

type Blog={
  id:string;
  image:string;
  title:string;
  content:string;
  createdAt:string;
  slug:string;
}

const Blogs = () => {
  // const[loading,setLoading]=useState(true);
  const[blogs,setBlogs]=useState<Blog[]>([]);
  useEffect(()=>{
   const fetchBlogs=async()=>{
    try{
     const response=await fetch('/api/blog');
     if(!response.ok){
       throw new Error("failed to fetch blogs..");
     }
     const data=await response.json();
     setBlogs(data);
     console.log("data: ",data);
    }catch(error){
     console.log("something went wrong: ",error);
    }finally{
      // setLoading(false);
    }
   }
   fetchBlogs();
  },[])

  return (
    <div className="w-full my-3 lg:my-10">
      <div className="w-full max-w-7xl px-4 lg:px-10 mx-auto">
        {/* hero  */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          <div className="lg:w-1/2 space-y-5">
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
                duration: 0.6,
                stiffness: 100,
                damping: 20,
                delay: 0.4,
              }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center md:text-start"
            >
              Explore some Interesting and Inspirational blogs by our Experts.{" "}
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
                duration: 0.6,
                stiffness: 100,
                damping: 20,
                delay: 0.6,
              }}
              className="text-sm md:text-base text-black/80 text-center md:text-start"
            >
              We work with the top ranked universities. 4th of the World&apos;s
              top 6 universities and 19th out World&apos;s Top 100 Universities
              are in the UK as per QS World Rankings. We provide researchers,
              educators and students excellent research opportunities. A handful
              of research centric universities forms an elite group called the
              Russell Group. Group.
            </motion.p>
          </div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 40 },
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
              delay: 0.6,
            }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-full h-60 lg:h-96">
              <Image
                src="/assets/blogs_hero.svg"
                alt="Hero Image"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </motion.div>
        </div>

        <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3 sm:gap-4">
          {blogs?.map((blog, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: 40 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                type: "spring",
                duration: 0.3,
                stiffness: 100,
                damping: 20,
                delay: 0.2 * index,
              }}
            >
              <BlogCard blog={blog} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
