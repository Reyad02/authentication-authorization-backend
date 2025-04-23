import bcrypt from "bcrypt";
import { IJWTPayload, ILogin } from "./auth.interface";
import userModel from "../user/user.model";
import { createToken, verifyToken } from "./auth.utils";
import config from "../../config";

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

  const payload: IJWTPayload = {
    email: userInfo.email,
  };

  const accessToken = createToken(
    payload,
    config.jwt_secret!,
    parseInt(config.jwt_expireTime!)
  );


  const result = verifyToken(accessToken,config.jwt_secret!)
  console.log(result);
  return accessToken;
};

export const authServices = {
  loginUser,
};
