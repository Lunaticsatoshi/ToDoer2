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

        const newTodo: ITodo = await todo.save();
        const allTodos: ITodo[] = await Todo.find();

        res.status(201).json({message: 'Todo Added', todo: newTodo, todos: allTodos});

    } catch (error) {
        throw error
    }
}

export const updateTodo = async(req :Request, res :Response) :Promise<void> => {
    try {
        const {params: {id},body} = req;
        const updatedTodo :ITodo | null = await Todo.findByIdAndUpdate({_id : id},body);
        const allTodos: ITodo[] = await Todo.find();

        res.status(201).json({message: 'Todo Updated', todo: updatedTodo, todos: allTodos});
    } catch (error) {
        throw error
    }
}

export const deleteTodo = async(req :Request, res :Response) :Promise<void> => {
    try {
        const {params: {id}} = req;
        const deletedTodo :ITodo | null = await Todo.findByIdAndRemove(id);
        const allTodos: ITodo[] = await Todo.find();

        res.status(201).json({message: 'Todo Deleted', todo: deletedTodo, todos: allTodos});
    } catch (error) {
        throw error
    }
}