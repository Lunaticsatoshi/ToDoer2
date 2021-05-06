import {Router} from "express";
import {getTodos,addTodos} from "../controller/todo";

const router :Router = Router();

router.get('/api/v1/todos', getTodos);

router.post('/api/v1/addTodos', addTodos);


export default router;