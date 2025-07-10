import {Router, Response, Request} from "express";
import {userAuthentication} from "@Middlewares/UserAuthMiddleware";
import {ControllerBankBox} from "@Controllers/ControllerBankBox";

const bankBoxRoutes: Router = Router();
const controller: ControllerBankBox = new ControllerBankBox();

bankBoxRoutes.post("", async (request: Request, response: Response) => {
    await controller.saveBankBox(request, response);
});

bankBoxRoutes.get("/bank/:id", async (request: Request, response: Response) => {
    await controller.getBankBoxes(request, response);
});

bankBoxRoutes.patch("/:id", async (request: Request, response: Response) => {
    await controller.updateBankBox(request, response);
});

bankBoxRoutes.delete("/:id", async (request: Request, response: Response) => {
    await controller.deleteBankBox(request, response);
});

export default bankBoxRoutes;
