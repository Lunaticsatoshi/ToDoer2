import {Request,Response} from "express";
import {ITodo} from "./../@types/todo";
import Todo from "../models/todo";

export const getTodos = async(req :Request, res :Response) :Promise<void> => {
    try {
        const todos :ITodo[] = await Todo.find();
        res.status(200).json({todos});
    } catch (error) {
        throw error
    }
}

export const addTodos = async(req :Request, res :Response) :Promise<void> => {
    const body = req.body as Pick<ITodo, "title" | "description" | "status">;
    try {
        const todo: ITodo = new Todo({
            title: body.title,
            description: body.description,
            status: body.status,
        });

        console.log(todo);

        const newTodo: ITodo = await todo.save();
        const allTodos: ITodo[] = await Todo.find();
        console.log("Todo Added");

        res.status(201).json({message: 'Todo Added', todo: newTodo, todos: allTodos});

    } catch (error) {
        console.log(error)
    }
}