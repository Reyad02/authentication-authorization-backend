import bcrypt from "bcrypt";
import { IJWTPayload, ILogin } from "./auth.interface";
import { createToken } from "./auth.utils";
import config from "../../config";
import User from "../user/user.model";

const loginUser = async (userInfo: ILogin) => {
  const isUserExist = await User.findOne({ email: userInfo.email });
  if (!isUserExist) {
    throw new Error("User dose not exists!");
  }
  const plainTextPassword = userInfo.password;
  const hashedPassword = isUserExist?.password;
  const passMatched = await bcrypt.compare(plainTextPassword, hashedPassword);

  if (!passMatched) {
    throw new Error("Password did not match");
  }

  const payload: IJWTPayload = {
    email: userInfo.email,
    userId: isUserExist?._id,
  };

  const accessToken = createToken(
    payload,
    config.jwt_secret!,
    parseInt(config.jwt_expireTime!)
  );

  return accessToken;
};

export const authServices = {
  loginUser,
};
