import {Router, Response, Request} from "express";
import {ControllerUser} from "@Controllers/ControllerUser";
import {userAuthentication} from "@Middlewares/UserAuthMiddleware";

const userRoutes: Router = Router();
const controller: ControllerUser = new ControllerUser();

userRoutes.post("/user", async (request: Request, response: Response) => {
    await controller.saveUser(request, response);
});

userRoutes.post("/user/login", async (request: Request, response: Response) => {
    await controller.getUserLogin(request, response);
});

userRoutes.post("/user/recovery", async (request: Request, response: Response) => {
    await controller.reactiveUser(request, response);
});

userRoutes.patch("/user/update/{id}", userAuthentication, async (request: Request, response: Response) => {
    await controller.updateUser(request, response);
});

userRoutes.post("/user/deactivate", userAuthentication, async (request: Request, response: Response) => {
    await controller.deactivateUser(request, response);
});

userRoutes.post("/user/logout", userAuthentication, async (request: Request, response: Response) => {
    await controller.logout(request, response);
});

export default userRoutes;
