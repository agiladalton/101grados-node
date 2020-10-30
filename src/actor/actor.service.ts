import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MbActor } from './actor.entity';

@Injectable()
export class MbActorService {
  constructor(
    @InjectRepository(MbActor)
    private actorRepository: Repository<MbActor>,
  ) {}

  create(mbActor: MbActor): Promise<MbActor> {
    return this.actorRepository.save(mbActor);
  }

  async findAll(): Promise<MbActor[]> {
    return this.actorRepository.find();
  }

  findOne(id: string): Promise<MbActor> {
    return this.actorRepository.findOne(id);
  }

  findOneAndUpdate(id: string, mbActor: MbActor) {
    return this.actorRepository.update(id, mbActor);
  }

  async remove(id: string): Promise<void> {
    await this.actorRepository.delete(id);
  }
}