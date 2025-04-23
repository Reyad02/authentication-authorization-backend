import { JwtPayload } from "jsonwebtoken";
import { IJob } from "./jobs.interface";
import { Job } from "./jobs.model";

const createJobs = async (jobInfo: IJob) => {
  const result = await Job.create(jobInfo);
  return result;
};

const deleteJob = async (id: string, authorId: JwtPayload) => {
  const selectedJob = await Job.findById(id);
  const requestUserId = authorId;
  if (!selectedJob) {
    throw new Error("Job not found.");
  }

  if (selectedJob.postedBy.toString() !== requestUserId.toString()) {
    throw new Error("This job is not created by you.");
  }
  const result = await Job.findByIdAndDelete(id, { new: true });
  return result;
};

const getAllJobs = async () => {
  const result = await Job.find().sort({ createdAt: -1 });
  return result;
};

const updateJob = async (id: string, updatedData: Partial<IJob>) => {
  const result = await Job.findByIdAndUpdate(id, updatedData, { new: true });
  return result;
};

const getJob = async (id: string) => {
  const result = await Job.findById(id);
  return result;
};

export const jobServices = {
  createJobs,
  deleteJob,
  getAllJobs,
  updateJob,
  getJob,
};
