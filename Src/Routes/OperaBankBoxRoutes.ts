import {Router, Request, Response} from "express";
import {userAuthentication} from "@Middlewares/UserAuthMiddleware";
import {ControllerOperaBankBox} from "@Controllers/ControllerOperaBankBox";

const operaBankBoxRoutes: Router = Router();
const controller: ControllerOperaBankBox = new ControllerOperaBankBox();

operaBankBoxRoutes.post("", userAuthentication, async (request: Request, response: Response) => {
    await controller.saveOperaBankBox(request, response);
});

operaBankBoxRoutes.get("/bank-box/:id", userAuthentication, async (request: Request, response: Response) => {
    await controller.getOperaBankBoxes(request, response);
});

export default operaBankBoxRoutes;
