import pool from "../config/database.js";

const boardModel = {
    getAll: async () => {
        const result = await pool.query(
            `SELECT * FROM boards ORDER BY id`
        );
        return result.rows;
    },

    getById: async (id) => {
        const result = await pool.query(
            `SELECT * FROM boards WHERE id = $1`,
            [id]
        );
        return result.rows[0];
    },

    create: async (userId, title) => {
        const result = await pool.query(
            `INSERT INTO boards(title,user_id) VALUES($1,$2) RETURNING *`,
            [title, userId]
        );
        console.log(userId);
        
        return result.rows[0];
    },

    update: async (id, title) => {
        const result = await pool.query(
            `UPDATE boards SET title = $1 WHERE id = $2 RETURNING *`,
            [title, id]
        );
        return result.rows[0];
    },

    delete: async (board_id) => {
        const result = await pool.query(
            'DELETE FROM boards WHERE id = $1 RETURNING id',
            [board_id]
        );
        return result.rows[0];
    }
};

export default boardModel;