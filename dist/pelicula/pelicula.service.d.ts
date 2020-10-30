import { Repository } from 'typeorm';
import { MbPelicula } from './pelicula.entity';
export declare class MbPeliculaService {
    private peliculaRepository;
    constructor(peliculaRepository: Repository<MbPelicula>);
    create(MbPelicula: MbPelicula): Promise<MbPelicula>;
    findAll(): Promise<MbPelicula[]>;
    findOne(id: string): Promise<MbPelicula>;
    findOneAndUpdate(id: string, MbPelicula: MbPelicula): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<void>;
}
