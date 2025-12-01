import { Request, Response } from "express";
import { pool } from "../../config/db";
import { userServices } from "./user.service";


const createUser = async (req: Request, res: Response) => {
    // console.log(req.body);
    const { name, email } = req.body

    try {
        const result = await userServices.createUser(name, email);
        // console.log(result.rows[0]);

        // res.send({message: "data inserted"})

        res.status(201).json({
            success: false,
            message: "Data Inserted Successfully",
            data: result.rows[0]
        })

    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }

    // res.status(201).json({
    //   success: true,
    //   message: "API is working"
    // })
}

export const userControllers = {
    createUser,
};