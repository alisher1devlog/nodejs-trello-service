import { Router } from "express";
import boardController from "../controllers/board.controller.js";
import validate from "../middleware/validate.js";
import { createAndUpdateBoardSchema } from "../validations/board.validation.js";

const boardRouter = Router();

boardRouter.get("/boards",boardController.getAllBoards);
boardRouter.get("/boards/:boardId",boardController.getById);
boardRouter.post("/boards",validate(createAndUpdateBoardSchema),boardController.createBoard);
boardRouter.put("/boards/:boardId",validate(createAndUpdateBoardSchema),boardController.updateBoard)
boardRouter.delete("/boards/:boardId",boardController.deleteBoard);


export default boardRouter;