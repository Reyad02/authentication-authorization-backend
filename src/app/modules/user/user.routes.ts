import { Router } from "express";
import { userController } from "./user.controller";

const router = Router();

router.post("/create-user", userController.registerUser);
export const UserRoutes = router;


