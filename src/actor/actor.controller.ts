import { Body, Controller, Delete, Get, Param, Post, Put, Res, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { MbActor } from './actor.entity';
import { MbActorService } from './actor.service';
import { CrearActorDto } from './dto/crear-actor';

@Controller('actor')
export class MbActorController {
  constructor(
    private readonly mbActorService: MbActorService
  ) {}

  @Post()
  create(@Body() crearActorDto: CrearActorDto): Promise<MbActor> {
    return this.mbActorService.create(crearActorDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() crearActorDto: CrearActorDto) {
    return this.mbActorService.findOneAndUpdate(id, crearActorDto);
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