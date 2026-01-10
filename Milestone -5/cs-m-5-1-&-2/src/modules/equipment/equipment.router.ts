import { Router, RequestHandler } from "express";
import { equipmentController } from "./equipment.controller";
import auth from "../../middleware/auth";

const equipmentRouter: Router = Router()

equipmentRouter.post("/", auth("equipment", "create"), equipmentController.createEquipment as RequestHandler);

equipmentRouter.get("/",auth("equipment", "read"), equipmentController.getEquipments as RequestHandler);

export default equipmentRouter
