import {Router, Request, Response} from "express";
import {userAuthentication} from "@Middlewares/UserAuthMiddleware";
import {ControllerPixKey} from "@Controllers/ControllerPixKey";

const pixKeyRoutes: Router = Router();
const controller: ControllerPixKey = new ControllerPixKey();

pixKeyRoutes.post("", userAuthentication, async (request: Request, response: Response) => {
    await controller.savePixKey(request, response);
});

pixKeyRoutes.get("/bank/:id", userAuthentication, async (request: Request, response: Response) => {
    await controller.getPixKeys(request, response);
});

pixKeyRoutes.patch("/:id", userAuthentication, async (request: Request, response: Response) => {
    await controller.updatePixKey(request, response);
});

pixKeyRoutes.delete("/:id", userAuthentication, async (request: Request, response: Response) => {
    await controller.deletePixKey(request, response);
});

export default pixKeyRoutes;
