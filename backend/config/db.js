import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  }catch(err){
    console.error(err.message);
    process.exit(1); // 1 code means exit with error, 0 means success
  }
}
      