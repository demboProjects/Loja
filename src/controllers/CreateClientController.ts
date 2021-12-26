import { Request, Response } from "express";


class CreateClientController {

    handle(request: Request, response: Response): Response {

        return response.sendStatus(200);
    }
}

export { CreateClientController }