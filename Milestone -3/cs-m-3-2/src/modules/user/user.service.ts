import { Request, Response } from "express";
import { pool } from "../../database/db";
import bcrypt from "bcryptjs";

const createUserIntoDB = async(payload: Record<string,unknown>) => {
 const {name, email, password} = payload;

 const hashPassword = await bcrypt.hash(password as string ,12)

    const result = await pool.query(`
        INSERT INTO users(name, email,password) VALUES($1, $2, $3) RETURNING id, name, email, age, created_at, updated_at
        `, [name, email, hashPassword])                                             // INSERT INTO users(name, email,password) VALUES($1, $2, $3) RETURNING *

        delete result.rows[0].password;
        // console.log(result);
        return result;
}
const getAllUserIntoDB = async() => {

    const result = await pool.query(`
        SELECT id, name, email, age, created_at, updated_at FROM users
        `)                                         

        // delete result.rows[0].password;
        // console.log(result);
        return result;
}


export const userService = {
    createUserIntoDB,
    getAllUserIntoDB

}