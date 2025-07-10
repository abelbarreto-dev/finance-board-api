import {Router, Request, Response} from "express";
import {userAuthentication} from "@Middlewares/UserAuthMiddleware";
import {ControllerOperaMoneyBox} from "@Controllers/ControllerOperaMoneyBox";

const operaMoneyBoxRoutes: Router = Router();
const controller: ControllerOperaMoneyBox = new ControllerOperaMoneyBox();

operaMoneyBoxRoutes.post("", userAuthentication, async (request: Request, response: Response) => {
    await controller.saveOperaMoneyBox(request, response);
});

operaMoneyBoxRoutes.get("/money-box/:id", userAuthentication, async (request: Request, response: Response) => {
    await controller.getOperaMoneyBoxes(request, response);
});

export default operaMoneyBoxRoutes;
