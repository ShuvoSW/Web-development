import { Router, RequestHandler } from "express";
import { equipmentController } from "./equipment.controller";

const equipmentRouter: Router = Router()

equipmentRouter.post("/", equipmentController.createEquipment as RequestHandler);

equipmentRouter.get("/", equipmentController.getEquipments as RequestHandler);

export default equipmentRouter
