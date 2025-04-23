import { Router } from "express";
import { jobControllers } from "./jobs.controller";
import auth from "../../middleware/auth";

const router = Router();

router.post("/create-job", auth(), jobControllers.createJob);
router.delete("/:jobId", auth(), jobControllers.deleteJob);
router.get("/view-jobs", auth(), jobControllers.getAllJob);
export const JobsRoutes = router;
