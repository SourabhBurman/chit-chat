import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
const connection = mongoose.connect(process.env.mongoURl);

export default connection