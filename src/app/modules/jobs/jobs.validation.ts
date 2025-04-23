import { z } from "zod";

export const jobValidationSchema = z.object({
  salary: z.number({ required_error: "Must set a salary" }).min(0),
  jobType: z.enum(["Full-time", "Part-time", "Remote", "Internship"], {
    required_error: "Must be set a job type",
  }),
  description: z.string({ required_error: "Must give a description" }).min(10),
  postedBy: z.string({ required_error: "Must include the poster ID" }),
  department: z.string({ required_error: "Must include the Department" }),
  designation: z.string({ required_error: "Must include the Designation" }),
});
