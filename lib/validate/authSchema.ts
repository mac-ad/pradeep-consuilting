// email and password validation zod schemas
import { z } from "zod";

const emailSchema = z.string().email().min(1, "Email is required");
const passwordSchema = z.string().min(6, "Password must be at least 6 characters long");
export const loginSchema = z.object({
    email: emailSchema,
    password: passwordSchema,
});

