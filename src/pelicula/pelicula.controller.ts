import { Body, Controller, Delete, Get, Param, Post, Put, Res, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { MbPelicula } from './pelicula.entity';
import { MbPeliculaService } from './pelicula.service';
import { Respuesta } from './dto/respuesta';

@Controller('pelicula')
export class MbPeliculaController {
  constructor(
    private readonly MbPeliculaService: MbPeliculaService
  ) {}

  @Post()
  async create(@Body() MbPelicula: MbPelicula): Promise<Respuesta> {
    return new Respuesta(true, 'Proceso realizado correctamente.', await this.MbPeliculaService.create(MbPelicula));
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() MbPelicula: MbPelicula): Promise<Respuesta> {
    await this.MbPeliculaService.findOneAndUpdate(id, MbPelicula);

    return new Respuesta(true, 'Proceso realizado correctamente.', MbPelicula);
  }

  @Get()
  findAll(): Promise<MbPelicula[]> {
    return this.MbPeliculaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<MbPelicula> {
    return this.MbPeliculaService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.MbPeliculaService.remove(id);
  }

}