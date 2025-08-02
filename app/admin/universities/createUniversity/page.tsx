"use client";

import { Trash2 } from "lucide-react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { toast } from "sonner";
import {Program} from '../../../types/universtiy';
import { UniversityCountry } from "@/prisma/generated/client";



export default function CreateUniversitySingle() {
 
  const [universityName, setUniversityName] = useState("");
  const [universityAbout, setUniversityAbout] = useState("");
  const [universityAddress, setUniversityAddress] = useState("");
  const[universityCountry,setUniversityCountry]=useState<UniversityCountry | "">("");
 const[previewImage,setPreviewImage]=useState('');
 const[universityImage,setUniversityImage]=useState<File | undefined>(undefined);

  const defaultSelectImage='/selectImage.png';


  const [loading, setLoading] = useState(false);
  const [programInfo,setProgramInfo]=useState<Program[]>([
     {
      id:"",
      program_name: '',
      duration: '',
      degree_type: '',
      department: '',
      description: '',
      entry_requirements: [{
          criteria: '',
          details: '',
        },]
      }
  ]);
  const uniImageRef=useRef<HTMLInputElement>(null);

  const handleSelectImage=async(event:React.ChangeEvent<HTMLInputElement>)=>{
      console.log("triggred select image..")
     const file=event.target.files?.[0];
     if(file){
      console.log("selected image file: ",file);
      const previewUrl=URL.createObjectURL(file);
      setPreviewImage(previewUrl);
      setUniversityImage(file);

     }
  }

  const handleAddProgram=(e:React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    setProgramInfo((prev)=>[
    ...prev,
     {
      id:'',
      program_name: '',
      duration: '',
      degree_type: '',
      department: '',
      description: '',
      entry_requirements: [{
        criteria: '',
        details: '',
      },]
    },
   
    ]);
  }


  const handleAddRequirement=(e:React.MouseEvent<HTMLButtonElement>,programIndex:number)=>{
    e.preventDefault();
    console.log("index: ",programIndex);
     setProgramInfo((prev)=>{
       const updated=[...prev];
       const program={...updated[programIndex]};
       program.entry_requirements=[...program.entry_requirements,{criteria:'',details:''}];
       updated[programIndex]=program;
       console.log("updated programInfo: ",updated);
       return updated;
  
     });
  }

  const handleDeleteProgram=(e:React.MouseEvent<HTMLButtonElement>,index:number)=>{
    const updated = [...programInfo];
      updated.splice(index, 1);
      setProgramInfo(updated);
  }
  const handleDeleteRequirement=(e:React.MouseEvent<HTMLButtonElement>,index:number,entryIndex:number)=>{
        e.preventDefault();
        const updated = [...programInfo];
        updated[index].entry_requirements = updated[index].entry_requirements.filter(
          (_, i) => i !== entryIndex
        );
        setProgramInfo(updated);
      
  }




  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    if(!universityImage){
      toast.error("University image is required..");
      setLoading(false);
      return;
    }
    

    // Basic validation
    if (
      !universityName.trim() ||
      !universityAbout.trim() ||
      !universityAddress.trim() ||
      !universityCountry!.trim()
    ) {
      toast.error( "Please fill in all required fields.");
      setLoading(false);
      return;
    }

    const allFieldsFilled = programInfo.every(program =>
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
  toast.error("Some fields are missing..");
  setLoading(false);
  return;
}


    try {
     
      const imageData=new FormData()
      
      imageData.append('image',universityImage!)
      const uploadImageResponse=await fetch('/api/blog/uploadImage',{
        method:'POST',
        body:imageData
      });
      if(!uploadImageResponse.ok){
      throw new Error("Failed to upload image")
      }
      const uploadResult=await uploadImageResponse.json();
      const imageUrl=uploadResult.url;
      
      const res = await fetch("/api/university", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          university_name: universityName,
          university_image:imageUrl,
          university_about: universityAbout,
          university_address: universityAddress,
          university_country:universityCountry,
          available_programs:programInfo
        }),
      });

      if (!res.ok) {
        const errData=await res.json();
        throw new Error(errData.message);
      }
      toast.success("University created successfully..");
      // Reset form
      setUniversityName("");
      setUniversityImage(undefined);
      setUniversityAbout("");
      setUniversityAddress("");
      setUniversityCountry("");

      setProgramInfo([
     {
      id:"",
      program_name: '',
      duration: '',
      degree_type: '',
      department: '',
      description: '',
      entry_requirements: [{
          criteria: '',
          details: '',
        },]
      }
  ]);
  setPreviewImage('');

    } catch (error: unknown) {
           if(error instanceof Error){
        toast.error(error.message);
      }else{
        toast.error("Something went wrong");
      }

    } finally {
      setLoading(false);
    }
  }
  

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Create University with Program and Entry Requirement</h1>
      <label>select University Image</label>
      <br></br>
      <button style={{height:"200px",width:"200px",overflow:"hidden"}} onClick={()=>{
        if(uniImageRef.current){
          uniImageRef.current.click();
        }
      }}>
        <Image src={previewImage ? previewImage : defaultSelectImage} height={200} width={200} alt="university"></Image>
      </button>
         <input type='file' name='universityImage' accept='image/*' style={{
              display:"none"  
            }} ref={uniImageRef} onChange={handleSelectImage} required  />
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">University Info</h2>
        <input
          type="text"
          placeholder="University Name"
          value={universityName}
          onChange={(e) => setUniversityName(e.target.value)}
          className="border rounded px-3 py-2 w-full"
          required
        />


        <textarea
          placeholder="About University"
          value={universityAbout}
          onChange={(e) => setUniversityAbout(e.target.value)}
          className="border rounded px-3 py-2 w-full"
          rows={3}
          required
        />

        <input
          type="text"
          placeholder="University Address"
          value={universityAddress}
          onChange={(e) => setUniversityAddress(e.target.value)}
          className="border rounded px-3 py-2 w-full"
          required
        />

  <select
  value={universityCountry}
  onChange={(e) => setUniversityCountry(e.target.value as UniversityCountry)}
  className="border rounded px-3 py-2 w-full"
  required
>
  <option value="" disabled>Select University Country</option>
  {Object.values(UniversityCountry).map((country) => (
    <option key={country} value={country}>
      {country
        .toLowerCase()
        .replace(/_/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase())}
    </option>
  ))}
</select>
      {programInfo.map((program, index) => (
  <div key={index} className="border rounded p-4 mt-6 space-y-4">
    <div className="flex items-center justify-between mb-4">
  <h2 className="text-xl font-semibold">Program Info #{index + 1}</h2>
  {index>0 && (
      <button
    type="button"
    onClick={(e) => handleDeleteProgram(e,index) }
    className="text-red-500 hover:text-red-600"
  >
    <Trash2 size={20} />
  </button>
  )}
</div>

    <input
      type="text"
      placeholder="Program Name"
      value={program.program_name}
      onChange={(e) => {
        const updated = [...programInfo];
        updated[index].program_name = e.target.value;
        setProgramInfo(updated);
      }}
      className="border rounded px-3 py-2 w-full"
      required
    />

    <input
      type="text"
      placeholder="Duration"
      value={program.duration}
      onChange={(e) => {
        const updated = [...programInfo];
        updated[index].duration = e.target.value;
        setProgramInfo(updated);
      }}
      className="border rounded px-3 py-2 w-full"
      required
    />

    <input
      type="text"
      placeholder="Degree Type"
      value={program.degree_type}
      onChange={(e) => {
        const updated = [...programInfo];
        updated[index].degree_type = e.target.value;
        setProgramInfo(updated);
      }}
      className="border rounded px-3 py-2 w-full"
      required
    />

    <input
      type="text"
      placeholder="Department"
      value={program.department!}
      onChange={(e) => {
        const updated = [...programInfo];
        updated[index].department = e.target.value;
        setProgramInfo(updated);
      }}
      className="border rounded px-3 py-2 w-full"
    />

    <textarea
      placeholder="Program Description"
      value={program.description!}
      onChange={(e) => {
        const updated = [...programInfo];
        updated[index].description = e.target.value;
        setProgramInfo(updated);
      }}
      className="border rounded px-3 py-2 w-full"
      rows={2}
    />
     <div className="flex items-center justify-between mb-4">

      <h2 className="text-xl font-semibold mt-6">Entry Requirement</h2>
    <button className="bg-blue-600 text-white py-2 px-2 rounded hover:bg-blue-700 disabled:opacity-50" onClick={(e)=>handleAddRequirement(e,index)}>
          Add Requirement
        </button>
     </div>
   {program.entry_requirements.map((req, entryIndex) => (
  <div
    key={entryIndex}
    className="border border-gray-300 rounded p-4 mb-4 relative"
  >
    <div className="mb-3">
      <label className="block text-sm font-medium mb-1">Criteria</label>
      <input
        type="text"
        placeholder="Criteria"
        value={req.criteria}
        onChange={(e) => {
          const updated = [...programInfo];
          updated[index].entry_requirements[entryIndex].criteria = e.target.value;
          setProgramInfo(updated);
        }}
        className="border rounded px-3 py-2 w-full"
        required
      />
    </div>

    <div className="mb-3">
      <label className="block text-sm font-medium mb-1">Details</label>
      <input
        type="text"
        placeholder="Details"
        value={req.details}
        onChange={(e) => {
          const updated = [...programInfo];
          updated[index].entry_requirements[entryIndex].details = e.target.value;
          setProgramInfo(updated);
        }}
        className="border rounded px-3 py-2 w-full"
        required
      />
    </div>

    {entryIndex>0 && (
      <button
      type="button"
      onClick={(e) => handleDeleteRequirement(e,index,entryIndex)}
      className="absolute top-2 right-2 text-red-500 text-sm hover:underline"
    >
      <Trash2 size={20}/>
    </button>
    )}
  </div>
))}

 </div>
    
))}

        <div>
          
          <button className="bg-blue-600 text-white py-2 px-2 rounded hover:bg-blue-700 disabled:opacity-50 mt-2" onClick={(e:React.MouseEvent<HTMLButtonElement>)=>handleAddProgram(e)}>
          Add Program
        </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Saving..." : "Create University"}
        </button>
      </form>
    </div>
  );
}
