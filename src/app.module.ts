import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MbActorModule } from './actor/actor.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArchivoModule } from './archivo/archivo.module';
import { MbPeliculaModule } from './pelicula/pelicula.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sabo.mejorseguridad.com',
      port: 56677,
      username: '101grados',
      password: '123456',
      database: '101gradosdb',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ArchivoModule,
    MbActorModule,
    MbPeliculaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
