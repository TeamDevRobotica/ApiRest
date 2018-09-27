import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Persona {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

}