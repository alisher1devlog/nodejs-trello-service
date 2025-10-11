import {Router} from "express"
import userController from "../controllers/user.controller.js";

const userRoutes = Router();


userRoutes.get("/users",userController.getAll);


export default userRoutes;