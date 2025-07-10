import {Router, Request, Response} from "express";
import {ControllerBank} from "@Controllers/ControllerBank";
import {userAuthentication} from "@Middlewares/UserAuthMiddleware";

const bankRoutes: Router = Router();
const controller: ControllerBank = new ControllerBank();

bankRoutes.post("", userAuthentication, async (request: Request, response: Response) => {
    await controller.saveBank(request, response);
});

bankRoutes.get("/:id", userAuthentication, async (request: Request, response: Response) => {
    await controller.getBankById(request, response);
});

bankRoutes.get("/user/:id", userAuthentication, async (request: Request, response: Response) => {
    await controller.getBanks(request, response);
});

bankRoutes.patch("/:id", userAuthentication, async (request: Request, response: Response) => {
    await controller.updateBank(request, response);
});

bankRoutes.delete("/:id", userAuthentication, async (request: Request, response: Response) => {
    await controller.deleteBank(request, response);
});

export default bankRoutes;
