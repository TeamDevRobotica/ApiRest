import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Persona } from "./Persona";
import { User } from "./User";
import { Hijo } from "./Hijo";

@Entity()
export class Tutor extends Persona{

    @Column()
    direccion:string;

    @OneToMany(type=> User, usuario=> usuario.tutor)
    usuarios:User[];

    @OneToMany(type=> Hijo, hijo=> hijo.tutor)
    hijos:Hijo[];

}