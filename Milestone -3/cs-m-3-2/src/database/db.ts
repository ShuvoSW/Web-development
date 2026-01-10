import { Pool } from "pg";
// import database from "."

export const pool = new Pool({
    // connectionString: `${database.CONNECTION_STR}`
    connectionString: "postgresql://neondb_owner:npg_DVesdRHhK0M1@ep-quiet-pond-a83ihk48-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require"
});

export const initDB = async () => {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users(
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT null,
            email VARCHAR(100) UNIQUE NOT NULL,
            password TEXT NOT NULL,
            age INT,
            created_at TIMESTAMP DEFAULT NOW(),
            updated_at TIMESTAMP DEFAULT NOW()
        )
    `)
    console.log("Database Connected");
}