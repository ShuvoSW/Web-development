import { Router } from "express";
import { userController } from "./user.controller";
import auth from "../../middleware/auth";

const router = Router()

// router.post("/",auth, userController.createController)
router.post("/", userController.createController)

export const userRouter = router;
