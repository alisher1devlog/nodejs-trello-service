import userModel from "../models/userModel.js";

const userController = {
    getAll: async (req, res) => {
        try {
            const users = await userModel.getAll();
            res.status(200).json(users);
        } catch (err) {
            console.log(`Userslar kelmadi!`, err);
            res.status(500).json({ message: `Serverda xarolik` });
        }
    },
    getById: async (req, res) => {
        try {
            const { userId } = req.params;
            const user = await userModel.getById(userId);

            if (!user) {
                res.status(404).json(`User not found`)
            }

            res.status(200).json(user)
        } catch (err) {
            console.log(`user topilmadi!`, err);
            res.status(500).json(`Serverda xatolik`)
        }
    },
    update: async (req, res) => {
        try {
            const { userId } = req.params;
            const updates = req.body;

            const updatedUser = await userModel.update(userId, updates);

            if (!updatedUser) {
                return res.status(404).json({ message: "Foydalanuvchi topilmadi" });
            }

            res.status(200).json(updatedUser);
        } catch (error) {
            console.error("update error:", error);
            res.status(500).json({ message: "Serverda xatolik yuz berdi" });
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const deleteUser = await userModel.delete(id);

            if (!deleteUser) {
                res.status(404).json(`User topilmadi`);
            }

            res.status(200).json({ message: `User o'chirildi` })
        } catch (err) {

        }
    }

}

export default userController;