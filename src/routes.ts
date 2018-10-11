import { UserController } from "./controller/UserController";
import { TutorControlador } from './controller/TutorControlador';


export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users",
    controller: UserController,
    action: "remove"
}, {
    // url para loguin
    method: "get",
    route: "/loguin/:usuario",
    controller: UserController,
    action: "loguin"
},
//TUTOR
{
    method: "get",
    route: "/tutores",
    controller: TutorControlador,
    action: "all"
}, {
    method: "get",
    route: "/tutores/:id",
    controller: TutorControlador,
    action: "one"
}, {
    method: "post",
    route: "/tutores",
    controller: TutorControlador,
    action: "save"
}, {
    method: "delete",
    route: "/tutores",
    controller: TutorControlador,
    action: "remove"
}];