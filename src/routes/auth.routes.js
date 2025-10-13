// BU QATORLARNI FAYLNING BOSIGA QO'SHING
import { Router } from 'express';
import authController from "../controllers/auth.controller.js";
import { registerSchema, loginSchema } from '../validations/auth.validation.js';
import validate from '../middleware/validate.js';


const authrouter = Router();


authrouter.post("/register",validate(registerSchema),authController.register);
authrouter.post("/login",validate(loginSchema),authController.login);


export default authrouter;