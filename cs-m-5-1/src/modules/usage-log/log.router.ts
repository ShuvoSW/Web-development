import { RequestHandler, Router } from "express";
import { logController } from "./log.controller";

const logRouter: Router = Router();

logRouter.post("/", logController.createUsageLog as RequestHandler);
logRouter.get("/", logController.getUsageLog as RequestHandler);

export default logRouter