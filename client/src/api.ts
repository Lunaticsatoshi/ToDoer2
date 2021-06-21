import axios, { AxiosResponse } from "axios";

const BASE_URL: string = "http://localhost:4000/api/v1";

export const getTodos = async (): Promise<AxiosResponse<APIDataType>> => {
  try {
    const todos: AxiosResponse<APIDataType> = await axios.get(
      `${BASE_URL}/todos`
    );
    return todos;
  } catch (error) {
    throw error;
  }
};

export const addTodos = async (
  todoData: ITodo
): Promise<AxiosResponse<APIDataType>> => {
  const todo: Omit<ITodo, "_id"> = {
    title: todoData.title,
    description: todoData.description,
    status: todoData.status,
  };
  try {
    const savedTodos: AxiosResponse<APIDataType> = await axios.post(
      `${BASE_URL}/addTodo`,
      todo
    );
    return savedTodos;
  } catch (error) {
    throw error;
  }
};

export const updateTodos = async (
  todoData: ITodo
): Promise<AxiosResponse<APIDataType>> => {
  const todo: Pick<ITodo, "title" | "description" | "status"> = {
    title: todoData.title,
    description: todoData.description,
    status: todoData.status,
  };
  try {
    const updatedTodos: AxiosResponse<APIDataType> = await axios.post(
      `${BASE_URL}/updateTodo/${todoData._id}`,
      todo
    );
    return updatedTodos;
  } catch (error) {
    throw error;
  }
};

export const updateTodoStatus = async (
  todoData: ITodo
): Promise<AxiosResponse<APIDataType>> => {
  try {
    const todoUpdate: Pick<ITodo, "status"> = {
      status: !status,
    };
    const updatedTodos: AxiosResponse<APIDataType> = await axios.put(
      `${BASE_URL}/updateTodo/${todoData._id}`,
      todoUpdate
    );
    return updatedTodos;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteTodos = async (
  todoData: ITodo
): Promise<AxiosResponse<APIDataType>> => {
  try {
    const deletedTodos: AxiosResponse<APIDataType> = await axios.delete(
      `${BASE_URL}/deleteTodo/${todoData._id}`
    );
    return deletedTodos;
  } catch (error) {
    throw error;
  }
};
