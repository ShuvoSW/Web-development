import { RequestHandler, Router } from "express";
import { logController } from "./log.controller";
import auth from "../../middleware/auth";
import { Role } from "../../generated/prisma/enums";

const logRouter: Router = Router();

// logRouter.post("/", auth([Role.Admin]), logController.createUsageLog as RequestHandler);

logRouter.post("/", auth(), logController.createUsageLog as RequestHandler);  

logRouter.get("/", logController.getUsageLog as RequestHandler);

logRouter.patch("/:id", auth(), logController.updateUsageLog as RequestHandler);

export default logRouter