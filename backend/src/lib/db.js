import mongoose from "mongoose";

export const connectDB= async ()=>{
    try{
        const conn= await mongoose.connect(process.env.MONGODB_URI);
        console.log("mongodb connected successfully",conn.connection.host);
    }
    catch(error){
        console.log("There is error while connecting to db ", error);
    }
}