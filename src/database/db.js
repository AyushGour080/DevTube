import mongoose, { connect } from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`\n MongDB connected !! DB Host :`);
  } catch (error) {
    console.log("Mongo DB error 1", error);
    process.exit(1);
  }
};

export default connectDB;
