import {Router, Request, Response} from "express";
import {userAuthentication} from "@Middlewares/UserAuthMiddleware";
import {ControllerOperaInvoice} from "@Controllers/ControllerOperaInvoice";

const operaInvoiceRoutes: Router = Router();
const controller: ControllerOperaInvoice = new ControllerOperaInvoice();

operaInvoiceRoutes.post("", userAuthentication, async (request: Request, response: Response) => {
    await controller.saveOperaInvoice(request, response);
});

operaInvoiceRoutes.get("/invoice/:id", userAuthentication, async (request: Request, response: Response) => {
    await controller.getOperaInvoices(request, response);
});

export default operaInvoiceRoutes;
