import bcrypt from "bcrypt";
import { IUser } from "./user.interface";
import config from "../../config";
import User from "./user.model";
import { createToken } from "../auth/auth.utils";
import { IJWTPayload } from "../auth/auth.interface";

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

  const payload: IJWTPayload = {
    email: userInfo.email,
    userId: result?._id,
  };

  if (result) {
    const accessToken = createToken(
      payload,
      config.jwt_secret!,
      parseInt(config.jwt_expireTime!)
    );
    return accessToken;
  }

  throw new Error("Cannot register.");
};

export const userServices = {
  registerUser,
};
