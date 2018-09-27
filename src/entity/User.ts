import {Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, JoinColumn} from "typeorm";
import { Tutor } from "./Tutor";
import { TipoUsuario } from "./TipoUsuario";
import { Persona } from "./Persona";

@Entity()
export class User extends Persona{

    @Column()
    usuario:string;

    @Column()
    clave:string;
    
    @ManyToOne(type => Tutor,tutor=>tutor.usuarios)
    tutor:Tutor;

    @OneToOne(type=> TipoUsuario)
    @JoinColumn()
    tipoUsuario:TipoUsuario;
}
