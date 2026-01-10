import { Router } from "express";
import { userController } from "./user.controller";

const router = Router()

router.post("/", userController.createController)

export const userRouter = router;
