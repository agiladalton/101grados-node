import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MbPelicula } from './pelicula.entity';

@Injectable()
export class MbPeliculaService {
  constructor(
    @InjectRepository(MbPelicula)
    private peliculaRepository: Repository<MbPelicula>,
  ) {}

  create(MbPelicula: MbPelicula): Promise<MbPelicula> {
    return this.peliculaRepository.save(MbPelicula);
  }

  async findAll(): Promise<MbPelicula[]> {
    return this.peliculaRepository.find();
  }

  findOne(id: string): Promise<MbPelicula> {
    return this.peliculaRepository.findOne(id);
  }

  findOneAndUpdate(id: string, MbPelicula: MbPelicula) {
    return this.peliculaRepository.update(id, MbPelicula);
  }

  async remove(id: string): Promise<void> {
    await this.peliculaRepository.delete(id);
  }
}