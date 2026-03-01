import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
       const connection = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
    console.log(`\n MONGO DB CONNECTED !! DB HOST : ${connection.connection.host}`);
    } catch(err){
        console.log("MONGO DB ERROR:",err);
        process.exit(1);
    }
}

export default connectDB;