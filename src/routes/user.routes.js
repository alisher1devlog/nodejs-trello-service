import {Router} from "express"
import userController from "../controllers/user.controller.js";


const userRoutes = Router();


userRoutes.get("/users",userController.getAll);
userRoutes.get("/users/:userId",userController.getById);
userRoutes.put("/users/:userId",userController.update);
userRoutes.delete("/users/:userId",userController.delete);


export default userRoutes;