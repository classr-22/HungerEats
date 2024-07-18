import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://Sumit:159753@cluster0.bw4ostc.mongodb.net/HungerEats')
    .then(()=>{console.log('DB connected')})
}