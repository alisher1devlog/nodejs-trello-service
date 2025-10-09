import bcrypt from "bcrypt"
import pool from "../config/database.config.js"

export const createUser = async(userData) =>{
    const {name, email, password } =  userData;
    
    const hashPassword = await bcrypt.hash(password,10);

    const sql = `
        INSERT INTO users (name, email, password)
        VALUES($1,$2,$3)
        RETURNING id, name,email,created_at,updated_at
    `;
    const values = [name, email, hashPassword];

    try {
        const result = await pool.query(sql, values);
        return result.rows[0];
    } catch (err) {
        console.log(`User yaratilmadi!`);
        throw new Error(err)
    }
}
