import mongoose from "mongoose";

const connectToMongo = async()=> {
    try {
       const res= await mongoose.connect("mongodb://localhost:27017/crud");
        if(res)
        {

            console.log("connected to database");
        }
    } catch (error) {
        console.log(error);
        
    }
    
}

export default connectToMongo;