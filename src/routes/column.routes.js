import { Router } from "express";
import columnController from "../controllers/column.controller.js";
import validate from "../middleware/validate.js";
import { updateColumnSchema, createColumnSchema } from "../validations/column.validation.js";

const columnRouter = Router();

columnRouter.get("/boards/:boardId/columns",columnController.getAllColumn);
columnRouter.post("/boards/:boardId/columns",validate(createColumnSchema),columnController.createColumn);
columnRouter.get("/boards/:boardId/columns/:columnId",columnController.getColumnById);
columnRouter.put("/boards/:boardId/columns/:columnId",validate(updateColumnSchema),columnController.updateColumn);
columnRouter.delete("/boards/:boardId/columns/:columnId",columnController.deleteColumn);



export default columnRouter;