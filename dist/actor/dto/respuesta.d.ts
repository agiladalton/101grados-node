import { MbActor } from "../actor.entity";
export declare class Respuesta {
    success: boolean;
    message: string;
    mbActor: MbActor;
    constructor(success: boolean, message: string, mbActor: MbActor);
}
