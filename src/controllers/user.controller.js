import apiError from "../middleware/apiError.js";
import userModel from "../models/userModel.js";

const userController = {
    getAll: async (req, res, next) => {
        try {
            const users = await userModel.getAll();
            res.status(200).send(users);
        } catch (err) {
            next(err)
        }
    },
    getById: async (req, res,next) => {
        try {
            const { userId } = req.params;
            const user = await userModel.getById(userId);

            if (!user) {
                throw new apiError(404, `User not found`);
            }

            res.status(200).send(user)
        } catch (err) {
            next(err)
        }
    },
    update: async (req, res,next) => {
        try {
            const { userId } = req.params;
            const updates = req.body;

            const updatedUser = await userModel.update(userId, updates);

            if (!updatedUser) {
                throw new apiError(404, "Foydalanuvchi topilmadi");
            }

            res.status(200).send(updatedUser);
        } catch (err) {
            next(err)
        }
    },
    delete: async (req, res, next) => {
        try {
            const { userId } = req.params;
            const deleteUser = await userModel.delete(userId);
            if (!deleteUser) {
                throw new apiError(404, "Foydalanuvchi topilmadi");
            }

            res.status(200).send({ message: `User o'chirildi` });
        } catch (err) {
            next(err)
        }
    }

}

export default userController;