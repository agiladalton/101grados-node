import { Repository } from 'typeorm';
import { MbActor } from './actor.entity';
export declare class MbActorService {
    private actorRepository;
    constructor(actorRepository: Repository<MbActor>);
    create(mbActor: MbActor): Promise<MbActor>;
    findAll(): Promise<MbActor[]>;
    findOne(id: string): Promise<MbActor>;
    findOneAndUpdate(id: string, mbActor: MbActor): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<void>;
}
