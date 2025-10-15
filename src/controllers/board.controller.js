import apiError from "../middleware/apiError.js";
import boardModel from "../models/boardModel.js";

const boardController = {
    getAllBoards: async (req, res, next) => {
        try {
            const boards = await boardModel.getAll();

            res.status(200).send({
                success: true,
                message: `Barcha boardlar`,
                data: boards
            });
        } catch (err) {
            next(err);
        }
    },

    getById: async (req, res, next) => {
        try {
            const { boardId } = req.params;
            const board = await boardModel.getById(boardId);

            if (!board) {
                throw new apiError(404, `Board topilmadi!`);
            }
            res.status(200).send({
                success: true,
                message: `Board topildi`,
                data: board
            });
        } catch (err) {
            next(err);
        }
    },

    createBoard: async (req, res, next) => {
        try {
            const { title } = req.body;
            const { userId } = req.params;
            console.log(userId);
            
            const newBoard = await boardModel.create(userId,title);

            res.status(201).send({
                success: true,
                message: `Board yaratildi!`,
                data: newBoard
            });
        } catch (err) {
            next(err);
        }
    },

    updateBoard: async (req, res, next) => {
        try {
            const { boardId } = req.params;
            const { title } = req.body;

            const board = await boardModel.getById(boardId);

            if (!board) {
                throw new apiError(404, `Update bo'lmadi`);
            }
            const updatedBoard = await boardModel.update(boardId, title);
            res.status(200).json({
                success: true,
                message: 'Board muvaffaqiyatli yangilandi',
                data: updatedBoard
            });

        } catch (err) {
            next(err);
        }
    },
    deleteBoard: async (req, res, next) => {
        try {
            const { boardId } = req.params;

            const board = await boardModel.getById(boardId);

            if (!board) {
                throw new apiError(404, 'Board topilmadi');
            }
            const deleteBoard = await boardModel.delete(boardId)
            res.status(200).json({
                success: true,
                message: 'Board muvaffaqiyatli o\'chirildi',
                data: deleteBoard
            });
        } catch (err) {
            next(err)
        }
    }
}

export default boardController;