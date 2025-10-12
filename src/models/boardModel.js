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

    create: async (title) => {
        const result = pool.query(
            `INSERT INTO boards(title) VALUES($1) RETURNING *`,
            [title]
        );
        return result.rows[0];
    },

    update: async (id, title) => {
        const result = await pool.query(
            `UPDATE boards SET title = $1 WHERE id = $2 RETURNING *`,
            [title, id]
        );
        return result.rows[0];
    },

    delete: async (board_id, task_id) => {
        const result = await pool.query(
            'DELETE FROM tasks WHERE id = $1 AND board_id = $2 RETURNING id',
            [task_id, board_id  ]
        );
        return result.rows[0];
    }
};

export default boardModel;