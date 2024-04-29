import express from "express";
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import dotenv from "dotEnv";
import cors from "cors";
import { error } from "console";


const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();


const PORT = process.env.PORT || 7000;
const URL = process.env.MONGOURL;

mongoose.connect(URL).then(()=>{
    console.log("DB connected Successfully");

    app.listen(PORT, ()=>{
        console.log(`Sever is running on ${PORT}`)
    })

}).catch(error=>console.log(error));