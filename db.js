const mongoose=require("mongoose");
const dotenv=require("dotenv")
dotenv.config();
const connectDb=async()=>{
    try{
        await mongoose.connect(process.env.Mongodb_url);
        console.log("db connected");
    }
    catch(error){
        console.log(error)
    }
}
module.exports=connectDb