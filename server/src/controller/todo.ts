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
    let body = req.body as Pick<ITodo, "title" | "description" | "status">;
    try {
        let todo :ITodo = new Todo({
            title: body.title,
            description: body.description,
            status: body.status
        })

        let newTodo :ITodo = await todo.save()
        let allTodos :ITodo[] = await Todo.find();

        res.status(201).json({message: 'Todo Added', todo: newTodo, todos: allTodos})

    } catch (error) {
        
    }
}