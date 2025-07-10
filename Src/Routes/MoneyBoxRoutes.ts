import {Router, Request, Response} from "express";
import {userAuthentication} from "@Middlewares/UserAuthMiddleware";
import {ControllerMoneyBox} from "@Controllers/ControllerMoneyBox";

const moneyBoxRoutes: Router = Router();
const controller: ControllerMoneyBox = new ControllerMoneyBox();

moneyBoxRoutes.post("", userAuthentication, async (request: Request, response: Response) => {
    await controller.saveMoneyBox(request, response);
});

moneyBoxRoutes.get("/money/:id", userAuthentication, async (request: Request, response: Response) => {
    await controller.getMoneyBoxes(request, response);
});

moneyBoxRoutes.patch("/:id", userAuthentication, async (request: Request, response: Response) => {
    await controller.updateMoneyBox(request, response);
});

moneyBoxRoutes.delete("/:id", userAuthentication, async (request: Request, response: Response) => {
    await controller.deleteMoneyBox(request, response);
});

export default moneyBoxRoutes;
