import pool from "../config/database.config.js";
import boardModel from "./boardModel.js";

const columnModel = {
    getAll: async () => {
        const result = await pool.query(
            `SELECT * FROM columnss ORDER BY id`
        );
        return result.rows;
    },

    getById: async (board_id, id) => {
        const result = await pool.query(
            `SELECT * FROM columnss WHERE id = $1 AND board_id = $1`,
            [id, board_id]
        );
        return result.rows[0];
    },

    create: async (title, orders, board_id) => {
        const result = await pool.query(
            `INSERT INTO columns(title,orders,board_id) VALUES ($1,$2,$3)`,
            [title, orders, board_id]
        );
        return result.rows[0]
    },
    update: async (id, board_id, updates) => {
        const { title, orders } = updates;


    },

    delete: async (id, board_id)=>{
        const result = await pool.query(
            `DELETE FROM columns WHERE id = $1 AND board_id = $2 RETURNING id`,
            [id,board_id]
        );
        return result.rows[0]
    }
}

export default columnModel;