import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MbActor } from './actor.entity';
import { CrearActorDto } from './dto/crear-actor';

@Injectable()
export class MbActorService {
  constructor(
    @InjectRepository(MbActor)
    private actorRepository: Repository<MbActor>,
  ) {}

  create(crearActorDto: CrearActorDto): Promise<MbActor> {
    const user = new MbActor();
    user.nombre = crearActorDto.nombre;
    user.edad = crearActorDto.edad;
    user.foto = crearActorDto.foto;

    return this.actorRepository.save(user);
  }

  async findAll(): Promise<MbActor[]> {
    console.log(process.env.PORT)
    return this.actorRepository.find();
  }

  findOne(id: string): Promise<MbActor> {
    return this.actorRepository.findOne(id);
  }

  findOneAndUpdate(id: string, crearActorDto: CrearActorDto) {
    return this.actorRepository.update(id, crearActorDto);
  }

  async remove(id: string): Promise<void> {
    await this.actorRepository.delete(id);
  }
}