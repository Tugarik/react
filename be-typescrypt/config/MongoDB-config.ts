import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(
    "mongodb+srv://tugAdmin:555555@cluster0.z8ursva.mongodb.net/sample_mflix?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB connection success"))
  .catch((err) => console.error(err));

export default mongoose.connection;
