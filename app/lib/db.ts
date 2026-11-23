import mongoose from "mongoose"

export async function connectDB() {
  if (mongoose.connection.readyState >= 1) return
  console.log(process.env.MONGODB_URI?.replace(/:[^:@]+@/, ":***@"))
  await mongoose.connect(process.env.MONGODB_URI as string)
}