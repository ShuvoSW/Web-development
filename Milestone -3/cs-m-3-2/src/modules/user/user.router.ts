import { Router } from "express";
import { userController } from "./user.controller";
import verify from "../../middleware/verify";
import auth from "../../middleware/auth";

const router = Router()

// router.post("/",verify, userController.createController)
router.get("/",auth(), userController.getAllUser)

router.get("/singleuser",auth(), userController.getSingleUser)

router.post("/", userController.createController)

export const userRouter = router;
