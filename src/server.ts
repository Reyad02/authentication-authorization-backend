import mongoose from "mongoose";
import config from "./app/config";
import app from "./app";

async function main() {
  try {
    await mongoose.connect(config.db_url as string);
    console.log("🛢 Database connected successfully");
  } catch (err) {
    console.error("Failed to connect to database:", err);
    process.exit(1);
  }
}

try {
  main();
  app.listen(config.port, () => {
    console.log(`🚀 Application is running on port ${config.port}`);
  });
} catch (error) {
  console.error("Error during bootstrap:", error);
  process.exit(1);
}
