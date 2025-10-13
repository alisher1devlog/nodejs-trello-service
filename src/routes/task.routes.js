import { Router } from "express";
import taskController from "../controllers/task.controller.js";
import validate from "../middleware/validate.js";
import { createTaskSchema, updateTaskSchema } from "../validations/task.validation.js";


const taskRouter = Router();

taskRouter.get("/boards/:boardId/tasks",taskController.getAllTasks);
taskRouter.post("/boards/:boardId/tasks",validate(createTaskSchema),taskController.createTask);
taskRouter.get("/boards/:boardId/tasks/:taskId",taskController.getTaskById);
taskRouter.put("/boards/:boardId/tasks/:taskId",validate(updateTaskSchema),taskController.updateTask);
taskRouter.delete("/boards/:boardId/tasks/:taskId",taskController.deleteTask);

export default taskRouter;