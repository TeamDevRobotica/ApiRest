import {Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne} from "typeorm";
import { Persona } from "./Persona";
import { Tutor } from "./Tutor";

@Entity()
export class Hijo extends Persona {

    @ManyToOne(type=> Tutor, tutor=>tutor.hijos)
    @JoinColumn()
    tutor:Tutor;
}