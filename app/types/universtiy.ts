import { UniversityCountry } from "@/prisma/generated/client";
export interface EntryRequirement {
  criteria: string;
  details: string;
}

export interface Program {
  id:string;
  program_name: string;
  duration: string;
  degree_type: string;
  department: string | null;
  description: string | null;
  entry_requirements: EntryRequirement[];
}



export interface University{
  id:string;
  university_name: string;
  university_image: string;
  university_about: string;
  university_address: string;
  university_country: UniversityCountry;
  available_programs: Program[];
}


export const UniversityCountryLabels: { value: UniversityCountry; label: string }[] = [
  { value: UniversityCountry.INDIA, label: "India" },
  { value: UniversityCountry.USA, label: "USA" },
  { value: UniversityCountry.UK, label: "UK" },
  { value: UniversityCountry.AUSTRALIA, label: "Australia" },
  { value: UniversityCountry.CANADA, label: "Canada" },
  { value: UniversityCountry.GERMANY, label: "Germany" },
  { value: UniversityCountry.JAPAN, label: "Japan" },
  { value: UniversityCountry.CHINA, label: "China" },
  { value: UniversityCountry.NEWZEALAND, label: "New Zealand" }
];


export type ProgramWithoutEntryRequirements = Omit<Program, 'entry_requirements'>;
