import {Router, Request, Response} from "express";
import {userAuthentication} from "@Middlewares/UserAuthMiddleware";
import {ControllerCard} from "@Controllers/ControllerCard";

const cardRoutes: Router = Router();
const controller: ControllerCard = new ControllerCard();

cardRoutes.post("", userAuthentication, async (request: Request, response: Response) => {
    await controller.saveCard(request, response);
});

cardRoutes.get("/:id", userAuthentication, async (request: Request, response: Response) => {
    await controller.getCardById(request, response);
});

cardRoutes.get("/bank/:id", userAuthentication, async (request: Request, response: Response) => {
    await controller.getCards(request, response);
});

cardRoutes.patch("/:id", userAuthentication, async (request: Request, response: Response) => {
    await controller.updateCard(request, response);
});

cardRoutes.delete("/:id", userAuthentication, async (request: Request, response: Response) => {
    await controller.deleteCard(request, response);
});

export default cardRoutes;
