// BlogTableData.tsx (Server Component)
import  prisma  from "@/lib/prisma";
import BlogTableClient from "./blogtable";
import { Separator } from "@/components/ui/separator";
// import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function BlogTableData() {
  const blogs = await prisma.blog.findMany({});
  console.log(blogs)
  

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex flex-col p-4 gap-4">
        <div className="flex gap-2">
          <h1 className="text-2xl font-semibold">Blogs</h1>
          {/* <Button className="ml-auto">Create Blog</Button> */}
          <Link href='/admin/blogs/createBlog'  className="ml-auto inline-block bg-primary text-white font-medium py-2 px-4 rounded hover:bg-primary/90 transition">Create Blog</Link>
        </div>
        <Separator />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <BlogTableClient initialData={blogs} />
      </div>
    </div>
  );
}
