import {Router} from "express"
import userController from "../controllers/user.controller.js";
import validate from "../middleware/validate.js";
import { updateUserSchema } from "../validations/user.validation.js";

const userRouter = Router();


userRouter.get("/users",userController.getAll);
userRouter.get("/users/:userId",userController.getById);
userRouter.put("/users/:userId",validate(updateUserSchema),userController.update);
userRouter.delete("/users/:userId",userController.delete);


export default userRouter;