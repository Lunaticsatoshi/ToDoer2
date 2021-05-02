import express,{Application,json} from "express";
import dotenv from "dotenv";
import cors from "cors";
import {connectDB} from "./config/db";

const app :Application = express();

dotenv.config()

app.use(cors())

app.use(json());

connectDB();

const PORT :string|number = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`))
