import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
// import {Program} from '../../../types/universtiy';
import {Program,University} from '../../types/universtiy';
import { UniversityCountry } from "@/prisma/generated/client";
export async function POST(request:NextRequest) {
      try{
         const {university_name,university_image,university_about,university_address,university_country,available_programs}=await request.json() as University;

        if(!university_name || !university_about || !university_address || !university_image ||!university_country){
          return NextResponse.json({message:"all fields are requrired.."},{status:400});
        }
          const allFieldsFilled = available_programs.every(program =>
  program.program_name.trim() !== '' &&
  program.duration.trim() !== '' &&
  program.degree_type.trim() !== '' &&
  program.department!.trim() !== '' &&
  program.description!.trim() !== '' &&
  program.entry_requirements.every(req =>
    req.criteria.trim() !== '' && req.details.trim() !== ''
  )
);
  if(!allFieldsFilled){
    return NextResponse.json({message:"some fields are missing.."},{status:400})
  }
        
      const createdUniversity=await prisma.university.create({
            data:{
                 university_name,
                 university_image,
                 university_about,
                 university_address,
                 university_country,
            }
      });


       await Promise.all(
        available_programs.map(async (program)=>{
            const{program_name,duration,degree_type,department,description,entry_requirements}
            =program;
            console.log("entry_requirement: ",entry_requirements);
          const createdProgram=await prisma.availableProgram.create({
            data:{
                  program_name,
                  duration,
                  degree_type,
                  department,
                  description,
                  universityId:createdUniversity.id
            }
          });
          entry_requirements.map(async(entry)=>{

            await prisma.entryRequirement.create({
            data:{
                  criteria:entry.criteria,
                  details:entry.details,
                  programId:createdProgram.id
            }
          });
          });

           
          
       })

       )
       return NextResponse.json({
            message:"university created successfully"
      },{status:201});


      }catch(error){
        console.log("error while creating university: ",error);
        return NextResponse.json({message:"error while creating university"},{status:500});
      }
      
}




export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const universityId = searchParams.get("id");
    const universityName = searchParams.get("name");
    const universityCountry = searchParams.get("country");

    if (universityId) {
      // Fetch university by ID
      const university = await prisma.university.findUnique({
        where: { id: universityId },
        include: {
          available_programs: {
            include: { entry_requirements: true },
          },
        },
      });

      if (!university) {
        return NextResponse.json({ message: "University not found" }, { status: 404 });
      }

      return NextResponse.json(university, { status: 200 });
    }

    if (universityName) {
      // Filter by university name (partial, case-insensitive)
      const universities = await prisma.university.findMany({
        where: {
          university_name: {
            contains: universityName,
            mode: "insensitive",
          },
        },
        include: {
          available_programs: {
            include: { entry_requirements: true },
          },
        },
      });

      return NextResponse.json(universities, { status: 200 });
    }

    if (universityCountry && universityCountry in UniversityCountry) {
      // Filter by university country
      const universities = await prisma.university.findMany({
        where: {
          university_country: universityCountry as UniversityCountry,
        },
        include: {
          available_programs: {
            include: { entry_requirements: true },
          },
        },
      });

      return NextResponse.json(universities, { status: 200 });
    }

    // Return all universities
    const universities = await prisma.university.findMany({
      include: {
        available_programs: {
          include: { entry_requirements: true },
        },
      },
    });

    return NextResponse.json(universities, { status: 200 });
  } catch (error) {
    console.error("Error fetching university/universities:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}



export async function PUT(request: NextRequest) {
  try {
    const {
      id,
      university_name,
      university_image,
      university_about,
      university_address,
      university_country,
      available_programs,
    } = await request.json();

    // Update the university
     await prisma.university.update({
      where: { id },
      data: {
        university_name,
        university_image,
        university_about,
        university_address,
        university_country,
      },
    });

    // Delete existing programs and their entry requirements
    const existingPrograms = await prisma.availableProgram.findMany({
      where: { universityId: id },
    });

    await Promise.all(
      existingPrograms.map(async (program) => {
        await prisma.entryRequirement.deleteMany({
          where: { programId: program.id },
        });
      })
    );

    await prisma.availableProgram.deleteMany({
      where: { universityId: id },
    });

    // Recreate programs and entry requirements
    await Promise.all(
      available_programs.map(async (program:Program) => {
        const {
          program_name,
          duration,
          degree_type,
          department,
          description,
          entry_requirements,
        } = program;

        const createdProgram = await prisma.availableProgram.create({
          data: {
            program_name,
            duration,
            degree_type,
            department,
            description,
            universityId: id,
          },
        });

        await Promise.all(
          entry_requirements.map(async (entry) => {
            await prisma.entryRequirement.create({
              data: {
                criteria: entry.criteria,
                details: entry.details,
                programId: createdProgram.id,
              },
            });
          })
        );
      })
    );

    return NextResponse.json(
      { message: "University updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating university:", error);
    return NextResponse.json(
      { message: "Failed to update university" },
      { status: 500 }
    );
  }

}


export async function DELETE(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const universityId = searchParams.get("university_id");
  const programId = searchParams.get("program_id");
  const entryRequirementId = searchParams.get("entry_requirement_id");

  if (!universityId) {
    return NextResponse.json({ message: "university_id is required" }, { status: 400 });
  }

  try {
    // DELETE entry requirement only
    if (entryRequirementId && programId) {
      const entry = await prisma.entryRequirement.findFirst({
        where: {
          id: entryRequirementId,
          program: {
            id: programId,
            universityId: universityId,
          },
        },
      });

      if (!entry) {
        return NextResponse.json({ message: "Entry requirement not found" }, { status: 404 });
      }

      await prisma.entryRequirement.delete({
        where: { id: entryRequirementId },
      });

      return NextResponse.json({ message: "Entry requirement deleted successfully" }, { status: 200 });
    }

    // DELETE program and its entry requirements
    if (programId) {
      const program = await prisma.availableProgram.findFirst({
        where: {
          id: programId,
          universityId: universityId,
        },
      });

      if (!program) {
        return NextResponse.json({ message: "Program not found for this university" }, { status: 404 });
      }

      await prisma.entryRequirement.deleteMany({
        where: { programId: programId },
      });

      await prisma.availableProgram.delete({
        where: { id: programId },
      });

      return NextResponse.json({ message: "Program deleted successfully" }, { status: 200 });
    }

    // DELETE university and all related data
    const university = await prisma.university.findUnique({
      where: { id: universityId },
      include: {
        available_programs: true,
      },
    });

    if (!university) {
      return NextResponse.json({ message: "University not found" }, { status: 404 });
    }

    for (const program of university.available_programs) {
      await prisma.entryRequirement.deleteMany({
        where: { programId: program.id },
      });
    }

    await prisma.availableProgram.deleteMany({
      where: { universityId: universityId },
    });

    await prisma.university.delete({
      where: { id: universityId },
    });

    return NextResponse.json({ message: "University and all related data deleted successfully" }, { status: 200 });

  } catch (error) {
    console.error("Error deleting data:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

