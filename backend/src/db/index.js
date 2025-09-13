import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MONGODB Connected");
  } catch (error) {
    console.log("MONGODB Connection failed!! ", error);
    process.exit(1);
  }
};

export default connectDB;
