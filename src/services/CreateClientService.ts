
import { getCustomRepository } from "typeorm";
import { ICreateClientDTO } from "../dtos/createClientDTO";
import { Client } from "../entity/Client";
import { ClientRepositories } from "../repositories/ClientRepositories";

class CreateClientService {

    async execute({ name, email, andress }: ICreateClientDTO): Promise<Client> {

        const clientRepositories = getCustomRepository(ClientRepositories);

        const existClient = await clientRepositories.find({ where: { name, email, andress } });

        if (!existClient) {
            throw new Error("Client already exists");
        }

        const clientDate = clientRepositories.create({
            name,
            email,
            andress
        });

        const client = await clientRepositories.save(clientDate);

        return client;

    }
}


export { CreateClientService }