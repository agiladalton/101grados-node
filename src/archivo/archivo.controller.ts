import { Controller, Post, Req, Res, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ArchivoService } from './archivo.service';

@Controller('Archivo')
export class ArchivoController {
  constructor(
    private readonly ArchivoController: ArchivoService
  ) {}

  @Post()
  async create(@Req() request, @Res() response) {
    try {
      await this.ArchivoController.Archivo(request, response);
    } catch (error) {
      return response.status(500).json(`Failed to upload image file: ${error.message}`);
    }
  }

  @Post('subirArchivos')
  @UseInterceptors(FilesInterceptor('files'))
  async subirArchivos(@UploadedFiles() files, @Res() response) {
    try {
      //return await this.ArchivoService.Archivo(file, response);
    } catch (error) {
      return response.status(500).json(`Failed to upload image file: ${error.message}`);
    }
  }
}