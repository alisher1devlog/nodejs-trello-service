import { Pool } from "pg"

const pool = new Pool({
    host: "localhost",
    port: 5432,
    user:"postgres",
    password:"12345",
    database:"trello_service"
})


export default pool;
