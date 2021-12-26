import {
    Entity,
    Column,
    PrimaryColumn,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";

import { v4 as uuid } from "uuid";

@Entity("clients")
class Client {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    andress: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Client }