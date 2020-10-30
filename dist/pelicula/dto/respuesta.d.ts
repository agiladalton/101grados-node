import { MbPelicula } from "../pelicula.entity";
export declare class Respuesta {
    success: boolean;
    message: string;
    mbPelicula: MbPelicula;
    constructor(success: boolean, message: string, mbPelicula: MbPelicula);
}
