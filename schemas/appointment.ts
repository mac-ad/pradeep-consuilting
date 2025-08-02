import { z } from "zod";

export const AppointmentFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone is required"),
  city: z.string().min(1, "City is required"),
  street: z.string().min(1, "Street is required"),
  branch: z.string().min(1, "Branch is required"),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in yyyy-mm-dd format"),
  time: z.string().regex(/^\d{2}:\d{2}$/, "Time must be in HH:mm format"),
});

