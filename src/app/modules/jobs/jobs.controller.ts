import { Request, Response } from "express";
import { jobValidationSchema } from "./jobs.validation";
import { jobServices } from "./jobs.service";

const createJob = async (req: Request, res: Response) => {
  try {
    req.body.postedBy = req.userId;
    const parseBody = jobValidationSchema.parse(req.body);
    const result = await jobServices.createJobs(parseBody);
    res.json({
      message: "Job created successfully",
      success: true,
      data: result,
    });
  } catch (err: any) {
    console.log(err);
    res.json({
      message: err?.message || "Failed to create job",
      success: false,
      error: err,
      stack: err?.stack,
    });
  }
};

const deleteJob = async (req: Request, res: Response) => {
  try {
    const { jobId } = req.params;
    const result = await jobServices.deleteJob(jobId ,req.userId);
    res.json({
      message: "Job deleted successfully",
      success: true,
      data: result,
    });
  } catch (err: any) {
    console.log(err);
    res.json({
      message: err?.message || "Failed to delete job",
      success: false,
      error: err,
      stack: err?.stack,
    });
  }
};

const getAllJob = async (req: Request, res: Response) => {
  try {
    const result = await jobServices.getAllJobs();
    res.json({
      message: "Job retrieved successfully",
      success: true,
      data: result,
    });
  } catch (err: any) {
    console.log(err);
    res.json({
      message: err?.message || "Failed to retrieved job",
      success: false,
      error: err,
      stack: err?.stack,
    });
  }
};

export const jobControllers = {
  createJob,
  deleteJob,
  getAllJob,
};
