import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { User } from '../entity/User';

export class UserController {

    private userRepository = getRepository(User);

    async all(request: Request, response: Response, next: NextFunction) {
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        response.setHeader('Access-Control-Allow-Credentials', 'true');
        return this.userRepository.find({ relations: ['tipoUsuario', 'tutor', 'tutor.hijos'] });
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToremove = await this.userRepository.findOne(request.params.id);
        await this.userRepository.remove(userToremove);
    }

    // devuelve un usuario por nombre de usuario y clave
    async loguin(request: Request, response: Response, next: NextFunction) {
        console.log("Ingreso");
        console.log(request.params.usuario);
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        response.setHeader('Access-Control-Allow-Credentials', 'true');
        const firstUser = await this.userRepository
            .createQueryBuilder("user")
            .where("user.usuario = :usuario", { usuario: request.params.usuario })
            .getOne();
        console.log(firstUser);
        return firstUser;
    }

}