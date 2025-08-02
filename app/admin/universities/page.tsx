import prisma from "@/lib/prisma";
import UniversityTableClient from "./universitytable";
import Link from "next/link";

export default async function Universities() {
  const university=await prisma.university.findMany({
    include:{
      available_programs:{
        include:{
          entry_requirements:true,
        }
      },
    } 
  });

  const universitySanitized = university.map(u => ({
  ...u,
  available_programs: u.available_programs.map(p => ({
    ...p,
    department: p.department ?? '', // default empty string if null
  }))
}));

  
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-2xl font-semibold">Universities</h1> 
         <Link href='/admin/universities/createUniversity'  className="ml-auto inline-block bg-primary text-white font-medium py-2 px-4 rounded hover:bg-primary/90 transition">Add university</Link>
      <p className="text-muted-foreground">
        Here you can manage your universities. You can create, edit, and delete
        universities.
          </p>
        <UniversityTableClient initialData={universitySanitized}/>
    </div>
  );
}
