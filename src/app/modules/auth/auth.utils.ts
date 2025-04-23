import jwt, {  JwtPayload, Secret } from "jsonwebtoken";
import { IJWTPayload } from "./auth.interface";

export const createToken = (
  payload: IJWTPayload,
  secret: Secret,
  expireTime: number
) => {
  return jwt.sign(payload, secret, { expiresIn: expireTime });
};

export const verifyToken = (token: string, secret: Secret) => {
  return jwt.verify(token, secret) as JwtPayload;
};
