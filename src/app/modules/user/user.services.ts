import bcrypt from "bcrypt";
import { IUser } from "./user.interface";
import config from "../../config";
import User from "./user.model";

const registerUser = async (userInfo: IUser) => {
  const isUserExist = await User.findOne({ email: userInfo.email });
  if (isUserExist) {
    throw new Error("User already exists.");
  }
  const plainTextPassword = userInfo.password;
  const hashedPassword = await bcrypt.hash(
    plainTextPassword,
    parseInt(config.salt_round!)
  );
  userInfo.password = hashedPassword;

  const result = await User.create(userInfo);
  return result;
};

export const userServices = {
  registerUser,
};
