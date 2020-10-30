import { Body, Controller, Delete, Get, Param, Post, Put, Res, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { MbActor } from './actor.entity';
import { MbActorService } from './actor.service';
import { Respuesta } from './dto/crear-actor';

@Controller('actor')
export class MbActorController {
  constructor(
    private readonly mbActorService: MbActorService
  ) {}

  @Post()
  async create(@Body() mbActor: MbActor): Promise<Respuesta> {
    return new Respuesta(true, 'Proceso realizado correctamente.', await this.mbActorService.create(mbActor));
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() mbActor: MbActor): Promise<Respuesta> {
    await this.mbActorService.findOneAndUpdate(id, mbActor);

    return new Respuesta(true, 'Proceso realizado correctamente.', mbActor);
  }

  @Get()
  findAll(): Promise<MbActor[]> {
    return this.mbActorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<MbActor> {
    return this.mbActorService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.mbActorService.remove(id);
  }

}