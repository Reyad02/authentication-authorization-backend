import  { Schema, model } from "mongoose";
import { IJob } from "./jobs.interface";

const jobSchema = new Schema(
  {
    salary: { type: Number, required: true },
    jobType: {
      type: String,
      enum: ["Full-time", "Part-time", "Remote", "Internship"],
      required: true,
    },
    description: { type: String, required: true },
    department: { type: String, required: true },
    designation: { type: String, required: true },
    postedBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  {
    timestamps: true,
  }
);


export const Job = model<IJob>("Job", jobSchema);
