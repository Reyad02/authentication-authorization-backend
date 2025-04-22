import mongoose from "mongoose";
import { ILogin } from "./auth.interface";

const loginSchema = new mongoose.Schema<ILogin>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const Login = mongoose.model<ILogin>("Login", loginSchema);

export default Login;
