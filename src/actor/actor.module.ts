import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileUploadService } from 'src/utils/file_upload.service';
import { MbActorController } from './actor.controller';
import { MbActor } from './actor.entity';
import { MbActorService } from './actor.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([MbActor]),
  ],
  providers: [
    FileUploadService,
    MbActorService,
  ],
  controllers: [MbActorController],
})
export class MbActorModule {}