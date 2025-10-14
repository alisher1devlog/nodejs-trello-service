import { json } from "express";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import apiError from "../middleware/apiError.js";

const authController = {
    register: async (req, res, next) => {
        try {
            const { name, email, password } = req.body;

            if (!name || !email || !password) {
                throw new apiError(400,`Name , email va password bo'lishi shart`);
            }

            const newUser = await userModel.create(name, email, password);

            res.status(201).json(newUser)
        } catch (err) {
            next(err)
        }
    },
    login: async (req, res, next) => {
        try {
            const { email, password } = req.body;
            const user = await userModel.getByEmail(email);

            if (!user) {
                throw new apiError(401,`Email yoki parol notog'ri`);
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (!isPasswordValid) {
                throw new apiError(401,`Email yoki parol notog'ri`);
            }
            const { password: _, ...userWithoutPassword } = user;

            res.status(200).json({
                success: true,
                message: 'Muvaffaqiyatli tizimga kirildi',
                data: userWithoutPassword
            });
        } catch (err) {
            next(err);
        }
    }
}

export default authController;