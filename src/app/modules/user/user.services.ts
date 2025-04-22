import bcrypt from "bcrypt";
import { IUser } from "./user.interface";
import config from "../../config";
import userModel from "./user.model";

const registerUser = async (userInfo: IUser) => {
  const isUserExist = await userModel.findOne({ email: userInfo.email });
  if (isUserExist) {
    throw new Error("User already exists.");
  }
  const plainTextPassword = userInfo.password;
  const hashedPassword = await bcrypt.hash(
    plainTextPassword,
    parseInt(config.salt_round!)
  );
  userInfo.password = hashedPassword;

  const result = await userModel.create(userInfo);
  return result;
};

export const userServices = {
  registerUser,
};
