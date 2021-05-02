import express,{Application,json} from "express";
import cors from "cors";
import {connectDB} from "./config/db";

const app :Application = express();



app.use(cors())

app.use(json());

connectDB();

const PORT :string|number = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`))
