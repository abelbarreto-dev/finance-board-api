import {Router, Request, Response} from "express";
import {userAuthentication} from "@Middlewares/UserAuthMiddleware";
import {ControllerInvoice} from "@Controllers/ControllerInvoice";

const invoiceRoutes: Router = Router();
const controller: ControllerInvoice = new ControllerInvoice();

invoiceRoutes.post("", async (request: Request, response: Response) => {
    await controller.saveInvoice(request, response);
});

invoiceRoutes.get("/card/:id", async (request: Request, response: Response) => {
    await controller.getInvoices(request, response);
});

invoiceRoutes.patch("/:id", async (request: Request, response: Response) => {
    await controller.updateInvoice(request, response);
});

export default invoiceRoutes;
