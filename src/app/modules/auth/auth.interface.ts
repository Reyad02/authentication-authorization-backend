import { Types } from "mongoose";

export interface ILogin {
  email: string;
  password: string;
}

export interface IJWTPayload {
  email: string;
  userId:  Types.ObjectId
}
