import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MbPeliculaController } from './pelicula.controller';
import { MbPelicula } from './pelicula.entity';
import { MbPeliculaService } from './pelicula.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([MbPelicula]),
  ],
  providers: [
    MbPeliculaService,
  ],
  controllers: [MbPeliculaController],
})
export class MbPeliculaModule {}