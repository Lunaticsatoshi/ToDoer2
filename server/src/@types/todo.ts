import {Document} from "mongoose";

export interface ITodo extends Document {
    title: string;
    description: string;
    status: boolean;
}