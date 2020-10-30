import { MbPelicula } from "../pelicula.entity";

export class Respuesta {
    success: boolean;
    message: string;
    mbPelicula: MbPelicula;
    
    constructor(success: boolean, message: string, mbPelicula: MbPelicula) {
        this.success = success;
        this.message = message;
        this.mbPelicula = mbPelicula;
    }
}