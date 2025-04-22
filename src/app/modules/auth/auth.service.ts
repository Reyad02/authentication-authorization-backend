import bcrypt from "bcrypt";
import { ILogin } from "./auth.interface";
import userModel from "../user/user.model";

const loginUser = async (userInfo: ILogin) => {
  const isUserExist = await userModel.findOne({ email: userInfo.email });
  if (!isUserExist) {
    throw new Error("User dose not exists!");
  }
  const plainTextPassword = userInfo.password;
  const hashedPassword = isUserExist?.password;
  const passMatched = await bcrypt.compare(plainTextPassword, hashedPassword);

  if (!passMatched) {
    throw new Error("Password did not match");
  }

  return isUserExist;
};

export const authServices = {
  loginUser,
};
