import pool from "../config/database.config.js"
import bcrypt from "bcrypt"


const userModel = {
    getAll: async () => {
        const result = await pool.query(
            `SELECT * FROM users ORDER BY id`
        );
        return result.rows
    },
    getById: async (id) => {
        const result = await pool.query(
            `SELECT * FROM users WHERE id = $1`,
            [id]
        );
        return result.rows[0];
    },
    create: async (name, email, password) => {
        const hashPassword = await bcrypt.hash(password, 10);

        const result = await pool.query(
            `INSERT INTO users (name, email, password) VALUES ($1,$2,$3) RETURNING id, name, email, created_at`,
            [name, email, hashPassword]
        );
        return result.rows[0];
    },
    getByEmail: async (email) => {
        const result = await pool.query(
            `SELECT * FROM users WHERE email = $1`,
            [email]
        );
        return result.rows[0];
    },
    update: async (id, updates) => {
        const checkUser = await pool.query(
            `SELECT id FROM users WHERE id = $1`,
            [id]
        )
        if (checkUser.rows.length === 0) {
            return null;
        }
        if (updates.password) {
            updates.password = await bcrypt.hash(updates.password, 10);
        }
        const setClause = [];
        const values = [];
        let paramIndex = 1;

        for (const [key, value] of Object.entries(updates)) {
            setClause.push(`${key} = $${paramIndex}`);
            values.push(value);
            paramIndex++;
        }

        values.push(id);

        const query = `
            UPDATE users 
            SET ${setClause.join(', ')} 
            WHERE id = $${paramIndex} 
            RETURNING id, name, email, created_at
        `;

        const result = await pool.query(query, values);
        return result.rows[0];

    },
    delete: async (id) => {
        const result = await pool.query(
            `DELETE FROM users WHERE id = $1 RETURNING id`,
            [id]
        );
        return result.rows[0];
    }
}

export default userModel;