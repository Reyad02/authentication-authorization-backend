import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join((process.cwd(), ".env")) });

export default {
  NODE_ENV: process.env.NODE_ENV,
  port: process.env.PORT,
  db_url: process.env.DB_URL,
  salt_round: process.env.SALT_ROUNDS,
  jwt_secret: process.env.JWT_SECRET,
  jwt_expireTime: process.env.JWT_Expire,
};
