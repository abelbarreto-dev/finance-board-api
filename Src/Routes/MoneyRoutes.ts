import {Router, Request, Response} from "express";
import {userAuthentication} from "@Middlewares/UserAuthMiddleware";
import {ControllerMoney} from "@Controllers/ControllerMoney";

const moneyRoutes: Router = Router();
const controller: ControllerMoney = new ControllerMoney();

moneyRoutes.post("", userAuthentication, async (request: Request, response: Response) => {
    await controller.saveMoney(request, response);
});

moneyRoutes.get("/user/:id", userAuthentication, async (request: Request, response: Response) => {
    await controller.getMoney(request, response);
});

moneyRoutes.patch("/:id", userAuthentication, async (request: Request, response: Response) => {
    await controller.updateMoney(request, response);
});

export default moneyRoutes;
