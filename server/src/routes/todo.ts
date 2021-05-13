import {Router} from "express";
import {getTodos,addTodos,updateTodo,deleteTodo} from "../controller/todo";

const router :Router = Router();

router.get('/api/v1/todos', getTodos);

router.post('/api/v1/addTodo', addTodos);

router.put('/api/v1/updateTodo/:id',updateTodo);

router.delete('/api/v1/deleteTodo/:id',deleteTodo);

export default router;