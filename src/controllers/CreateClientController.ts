import { Request, Response } from "express";
import { CreateClientService } from "../services/CreateClientService";


class CreateClientController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { name, email, andress } = request.body;
        const service = new CreateClientService()
        const client = await service.execute({ name, email, andress });
        return response.status(200).json(client);
    }
}

export { CreateClientController }