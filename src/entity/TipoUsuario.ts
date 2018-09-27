import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";


@Entity('tipoUsuario')
export class TipoUsuario {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tipo: string;

}