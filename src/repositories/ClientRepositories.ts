import { EntityRepository, Repository } from "typeorm";
import { Client } from "../entity/Client"

@EntityRepository(Client)
class ClientRepositories extends Repository<Client>{

}

export { ClientRepositories }