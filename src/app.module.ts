import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MbActorModule } from './actor/actor.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileUploadModule } from './utils/file_upload.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sabo.mejorseguridad.com',
      port: 56677,
      username: 'constantine',
      password: '$$KeanuReeves2015',
      database: '101gradosdb',
      autoLoadEntities: true,
      synchronize: true,
    }),
    FileUploadModule,
    MbActorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
