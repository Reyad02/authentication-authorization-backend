import { Request, Response } from "express";
import { userServices } from "./user.services";
import { userValidationSchema } from "./user.vlaidation";

const registerUser = async (req: Request, res: Response) => {
  try {
    const parseBody = userValidationSchema.parse(req.body);
    const result = await userServices.registerUser(parseBody);
    res.json({
      message: "User created successfully",
      success: true,
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.json({
      message: err?.message || "Failed to create user",
      success: false,
      error: err,
      stack: err?.stack,
    });
  }
};

export const userController = { registerUser };
