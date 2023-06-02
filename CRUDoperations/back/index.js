import express from "express";
import connectToMongo from "./config/db.js";
import router from  "./routes/user.js"
const app=express();
import cors from 'cors';

app.use(cors());

connectToMongo();



const PORT=process.env.PORT||8000;

app.use(express.json());
// app.use(cors());
app.get("/",(req,res)=>{
res.send( " api is runnin g wht the heck");
})

app.use("/api/v1",router);

app.listen(PORT,()=>{
    console.log('this server is ruinning: ${PORT}'+PORT);
})