import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import { Tutor } from "../entity/Tutor";

export class TutorControlador {

    private userRepository = getRepository(Tutor);

    async all(request: Request, response: Response, next: NextFunction) {
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        response.setHeader('Access-Control-Allow-Credentials', 'true');  
        return this.userRepository.find({relations:['usuarios','hijos']});
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

}