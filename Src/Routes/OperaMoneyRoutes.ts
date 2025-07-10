import {Router, Request, Response} from "express";
import {userAuthentication} from "@Middlewares/UserAuthMiddleware";
import {ControllerOperaMoney} from "@Controllers/ControllerOperaMoney";

const operaMoneyRoutes: Router = Router();
const controller: ControllerOperaMoney = new ControllerOperaMoney();

operaMoneyRoutes.post("", userAuthentication, async (request: Request, response: Response) => {
    await controller.saveOperaMoney(request, response);
});

operaMoneyRoutes.get("/money/:id", async (request: Request, response: Response) => {
    await controller.getOperaMoneys(request, response);
});

export default operaMoneyRoutes;
