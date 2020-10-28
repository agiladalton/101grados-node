import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArchivoService } from 'src/archivo/archivo.service';
import { MbActorController } from './actor.controller';
import { MbActor } from './actor.entity';
import { MbActorService } from './actor.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([MbActor]),
  ],
  providers: [
    ArchivoService,
    MbActorService,
  ],
  controllers: [MbActorController],
})
export class MbActorModule {}