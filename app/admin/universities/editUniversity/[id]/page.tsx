"use client";

import { Trash2 } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { toast } from "sonner";
import { EntryRequirement, Program,ProgramWithoutEntryRequirements } from "@/app/types/universtiy";
import { UniversityCountry } from "@/prisma/generated/client";



export default function EditUniversitySingle() {
  const { id } = useParams();
  const uniImageRef = useRef<HTMLInputElement>(null);

  const [universityName, setUniversityName] = useState("");
  const [universityAbout, setUniversityAbout] = useState("");
  const [universityAddress, setUniversityAddress] = useState("");
  const[universityCountry,setUniversityCountry]=useState<UniversityCountry | '' >("");
  const [previewImage, setPreviewImage] = useState("");
  const [universityImage, setUniversityImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [programInfo, setProgramInfo] = useState<Program[]|[]>([]);

  const fields: (keyof ProgramWithoutEntryRequirements)[] = [
  'program_name',
  'duration',
  'degree_type',
  'department',
  'description',
];




  const defaultSelectImage = "/selectImage.png";

  useEffect(() => {
    async function fetchUniversity() {
      try {
        const res = await fetch(`/api/university?id=${id}`);
        if (!res.ok) throw new Error("Failed to fetch university");
        const data = await res.json();
        console.log("data: ",data);

        setUniversityName(data.university_name);
        setUniversityAbout(data.university_about);
        setUniversityAddress(data.university_address);
        setPreviewImage(data.university_image);
        setUniversityCountry(data.university_country);
        setProgramInfo(data.available_programs || []);
      } catch (err:unknown) {
         console.log("Error: ",err)
      }
    }

    if (id) fetchUniversity();
  }, [id]);

  const handleSelectImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreviewImage(previewUrl);
      setUniversityImage(file);
    }
  };

  const handleAddProgram = () => {
    setProgramInfo((prev) => [
      ...prev,
      {
        id:"",
        program_name: "",
        duration: "",
        degree_type: "",
        department: "",
        description: "",
        entry_requirements: [{ criteria: "", details: "" }],
      },
    ]);
  };

  const handleDeleteProgram = (index: number) => {
    setProgramInfo((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAddRequirement = (programIndex: number) => {
     setProgramInfo((prev)=>{
       const updated=[...prev];
       const program={...updated[programIndex]};
       program.entry_requirements=[...program.entry_requirements,{criteria:'',details:''}];
       updated[programIndex]=program;
       console.log("updated programInfo: ",updated);
       return updated;
     });
  };

  const handleDeleteRequirement = (programIndex: number, entryIndex: number) => {
    setProgramInfo((prev) => {
      const updated = [...prev];
      updated[programIndex].entry_requirements = updated[programIndex].entry_requirements.filter((_, i) => i !== entryIndex);
      return updated;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
  
    try {

      let imageUrl = previewImage;
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


      if (universityImage) {
        const imageData = new FormData();
        imageData.append("image", universityImage);

        const res = await fetch("/api/blog/uploadImage", {
          method: "POST",
          body: imageData,
        });

        if (!res.ok) throw new Error("Failed to upload image");

        const result = await res.json();
        imageUrl = result.url;
      }

      
      const res = await fetch(`/api/university`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          university_name: universityName,
          university_image: imageUrl,
          university_about: universityAbout,
          university_address: universityAddress,
          university_country:universityCountry,
          available_programs: programInfo,
          id,
        }),
      });

      if (!res.ok){
        const errData=await res.json();
        throw new Error(errData.message);
      }
      toast.success("University data updated successfully..");
    } catch (error: unknown) {
       if(error instanceof Error){
              toast.error(error.message);
            }else{
              toast.error("Something went wrong");
            }
          
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Edit University</h1>

      <label>Select University Image</label>
      <br />
      <button
        style={{ height: "200px", width: "200px", overflow: "hidden" }}
        type="button"
        onClick={() => uniImageRef.current?.click()}
      >
        <Image
          src={previewImage || defaultSelectImage}
          height={200}
          width={200}
          alt="university"
        />
      </button>

      <input
        type="file"
        name="universityImage"
        accept="image/*"
        style={{ display: "none" }}
        ref={uniImageRef}
        onChange={handleSelectImage}
      />

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
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



        {programInfo.map((program:Program, index) => (
          <div key={index} className="border rounded p-4 mt-6 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Program #{index + 1}</h2>
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => handleDeleteProgram(index)}
                  className="text-red-600"
                >
                  <Trash2 size={20} />
                </button>
              )}
            </div>

            {fields.map((field) => (
              <input
                key={field}
                type="text"
                placeholder={field.replace("_", " ")}
                value={program[field]!}
                onChange={(e) => {
                  const updated = [...programInfo];
                  updated[index][field] = e.target.value;
                  setProgramInfo(updated);
                }}
                className="border rounded px-3 py-2 w-full"
                required={["program_name", "duration", "degree_type"].includes(field)}
              />
            ))}

            <div className="flex justify-between items-center mt-4">
              <h3 className="font-medium">Entry Requirements</h3>
              <button
                type="button"
                className="bg-blue-600 text-white px-3 py-1 rounded"
                onClick={() => handleAddRequirement(index)}
              >
                Add Requirement
              </button>
            </div>

            {program.entry_requirements.map((req:EntryRequirement, entryIndex: number) => (
              <div
                key={entryIndex}
                className="border border-gray-300 rounded p-4 relative"
              >
                <input
                  type="text"
                  placeholder="Criteria"
                  value={req.criteria}
                  onChange={(e) => {
                    const updated = [...programInfo];
                    updated[index].entry_requirements[entryIndex].criteria =
                      e.target.value;
                    setProgramInfo(updated);
                  }}
                  className="border rounded px-3 py-2 w-full mb-2"
                  required
                />
                <input
                  type="text"
                  placeholder="Details"
                  value={req.details}
                  onChange={(e) => {
                    const updated = [...programInfo];
                    updated[index].entry_requirements[entryIndex].details =
                      e.target.value;
                    setProgramInfo(updated);
                  }}
                  className="border rounded px-3 py-2 w-full"
                  required
                />
                {entryIndex > 0 && (
                  <button
                    type="button"
                    className="absolute top-2 right-2 text-red-500"
                    onClick={() =>
                      handleDeleteRequirement(index, entryIndex)
                    }
                  >
                    <Trash2 size={20} />
                  </button>
                )}
              </div>
            ))}
          </div>
        ))}

        <button
          type="button"
          className="bg-blue-600 text-white py-2 px-4 rounded mt-2"
          onClick={handleAddProgram}
        >
          Add Program
        </button>


        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Updating..." : "Update University"}
        </button>
      </form>
    </div>
  );
}
