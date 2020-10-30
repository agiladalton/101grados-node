import { MbActor } from "../actor.entity";

export class Respuesta {
    success: boolean;
    message: string;
    mbActor: MbActor;
    
    constructor(success: boolean, message: string, mbActor: MbActor) {
        this.success = success;
        this.message = message;
        this.mbActor = mbActor;
    }
}