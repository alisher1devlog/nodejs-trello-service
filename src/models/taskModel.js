import pool from "../config/database.config";
import boardModel from "./boardModel";

const taskModel = {
    getAll: async () => {
        const result = await pool.query(
            `SELECT * FROM tasks ORDER BY id`
        )
        return result.rows;
    },
    getById: async (id) => {
        const result = await pool.query(
            `SELECT * FROM tasks WHERE id = $1`,
            [id]
        );
        return result.rows[0]
    },
    create: async (board_id, taskData) => {
        const { title, description, orders, user_id, column_id } = taskData;
        const result = pool.query(
            `INSERT INTO tasks(title,description,orders,user_id,board_id,column_id) 
            VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`,
            [title, description, orders, user_id, board_id, column_id]
        );
        return (await result).rows[0];
    },
    update: async ()=>{

    },
    delete: async (board_id, id) => {
        const result = await pool.query(
            'DELETE FROM tasks WHERE id = $1 AND board_id = $2 RETURNING id',
            [taskId, boardId]
        );
        return result.rows[0];
    }
}

export default taskModel;