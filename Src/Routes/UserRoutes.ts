import {Router, Response, Request} from "express";
import {ControllerUser} from "@Controllers/ControllerUser";
import {userAuthentication} from "@Middlewares/UserAuthMiddleware";

const userRoutes: Router = Router();
const controller: ControllerUser = new ControllerUser();

userRoutes.post("", async (request: Request, response: Response) => {
    await controller.saveUser(request, response);
});

userRoutes.post("/login", async (request: Request, response: Response) => {
    await controller.getUserLogin(request, response);
});

userRoutes.post("/recovery", async (request: Request, response: Response) => {
    await controller.reactiveUser(request, response);
});

userRoutes.patch("/update/{id}", userAuthentication, async (request: Request, response: Response) => {
    await controller.updateUser(request, response);
});

userRoutes.post("/deactivate", userAuthentication, async (request: Request, response: Response) => {
    await controller.deactivateUser(request, response);
});

userRoutes.post("/logout", userAuthentication, async (request: Request, response: Response) => {
    await controller.logout(request, response);
});

export default userRoutes;
