import { Request, Response } from "express";
import { loginValidationSchema } from "./auth.validation";
import { authServices } from "./auth.service";

const loginUser = async (req: Request, res: Response) => {
  try {
    const parseBody = loginValidationSchema.parse(req.body);
    const result = await authServices.loginUser(parseBody);
    res.json({
      message: "User logged in successfully",
      success: true,
      data: result,
    });
  } catch (err: any) {
    console.log(err);
    res.json({
      message: err?.message || "Failed to logged in user",
      success: false,
      error: err,
      stack: err?.stack,
    });
  }
};

export const loginController = { loginUser };
