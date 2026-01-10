import { Request, Response } from "express";
import { pool } from "../../database/db";
import { userService } from "./user.service";

const  createController = async (req: Request, res: Response) => {
    // const body = req.body;
    // console.log(body);

   try {
    const result = await userService.createUserIntoDB(req.body)
        return res.status(201).json({
            success: true,
            message: "User created",
            data: result.rows[0]
        })
   } catch (error: any) {
      return res.status(500).json({
            success: true,
            message: error.message
        })
   }
}

export const userController = {
    createController
}