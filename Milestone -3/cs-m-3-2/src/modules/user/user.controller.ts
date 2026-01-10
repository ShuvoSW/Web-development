import { Request, Response } from "express";
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

const  getAllUser = async (req: Request, res: Response) => {
    
   try {
    const result = await userService.getAllUserIntoDB()
        return res.status(201).json({
            success: true,
            message: "User created",
            data: result.rows,
        })
   } catch (error: any) {
      return res.status(500).json({
            success: true,
            message: error.message
        })
   }
}

const  getSingleUser = async (req: Request, res: Response) => {
    
   try {
    const email = req.user!.email
    const result = await userService.getSingleUserIntoDB(email)
        return res.status(201).json({
            success: true,
            message: "User created",
            data: result.rows,
        })
   } catch (error: any) {
      return res.status(500).json({
            success: true,
            message: error.message
        })
   }
}

export const userController = {
    createController,
    getAllUser,
    getSingleUser
}