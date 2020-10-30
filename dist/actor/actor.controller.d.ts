import { MbActor } from './actor.entity';
import { MbActorService } from './actor.service';
import { Respuesta } from './dto/respuesta';
export declare class MbActorController {
    private readonly mbActorService;
    constructor(mbActorService: MbActorService);
    create(mbActor: MbActor): Promise<Respuesta>;
    update(id: string, mbActor: MbActor): Promise<Respuesta>;
    findAll(): Promise<MbActor[]>;
    findOne(id: string): Promise<MbActor>;
    remove(id: string): Promise<void>;
}
