import { MbPelicula } from './pelicula.entity';
import { MbPeliculaService } from './pelicula.service';
import { Respuesta } from './dto/respuesta';
export declare class MbPeliculaController {
    private readonly MbPeliculaService;
    constructor(MbPeliculaService: MbPeliculaService);
    create(MbPelicula: MbPelicula): Promise<Respuesta>;
    update(id: string, MbPelicula: MbPelicula): Promise<Respuesta>;
    findAll(): Promise<MbPelicula[]>;
    findOne(id: string): Promise<MbPelicula>;
    remove(id: string): Promise<void>;
}
