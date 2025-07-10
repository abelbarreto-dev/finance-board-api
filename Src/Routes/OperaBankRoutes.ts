import {Router, Request, Response} from "express";
import {userAuthentication} from "@Middlewares/UserAuthMiddleware";
import {ControllerOperaBank} from "@Controllers/ControllerOperaBank";

const operaBankRoutes: Router = Router();
const controller: ControllerOperaBank = new ControllerOperaBank();

operaBankRoutes.post("", userAuthentication, async (request: Request, response: Response) => {
    await controller.saveOperaBank(request, response);
});

operaBankRoutes.get("/bank/:id", userAuthentication, async (request: Request, response: Response) => {
    await controller.getOperaBanks(request, response);
});

export default operaBankRoutes;
