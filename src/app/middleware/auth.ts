import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../modules/auth/auth.utils";
import config from "../config";
import User from "../modules/user/user.model";
import { JwtPayload } from "jsonwebtoken";

const auth = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        throw new Error("Plz login first");
      }
      const decodedToken = verifyToken(token, config.jwt_secret!);
      if (!decodedToken) {
        throw new Error("Plz login first");
      }

      const { email } = decodedToken;
      const existUser = User.findOne({ email: email });
      if (!existUser) {
        throw new Error("Plz signup first");
      }

      req.user = decodedToken?.email as JwtPayload;
      req.userId = decodedToken?.userId as JwtPayload;

      next();
    } catch (err: any) {
      res.json({
        message: err?.message || "Failed to verify the user",
        success: false,
        error: err,
        stack: err?.stack,
      });
    }
  };
};

export default auth;
