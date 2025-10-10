import pg from "pg"
import dotenv from "dotenv"
dotenv.config();

const { Pool } = pg;
const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: pocess.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

pool.on("connect",()=>{
    console.log(`Databasega ulandi!`);
});

pool.on("error",()=>{
    console.log(`Databasega ulanishda xatolik!`);
});


export default pool;
