import { z } from "zod";

export const userValidationSchema = z.object({
  name: z.string({required_error:"Must be set a name"}).min(3),
  email: z.string({required_error:"Must be set a valid email"}).email(),
  password: z.string().min(6),
});