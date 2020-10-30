import { Controller, Post, Req, Res, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { ArchivoService } from './archivo.service';

@Controller('archivo')
export class ArchivoController {
  constructor(
    private readonly archivoService: ArchivoService
  ) {}

  @Post('subir')
  async subir(@Req() req, @Res() response) {
    try {
      await this.archivoService.fileupload(req, response);
    } catch (error) {
      return response.status(500).json({
        success: false,
        message: `Failed to upload image file: ${error.message}`
      });
    }
  }

  @Post('subirVarios')
  @UseInterceptors(FilesInterceptor('files'))
  async subirVarios(@UploadedFiles() files, @Res() response) {
    try {
      //TODO: Controlar para subir varios archivos.
    } catch (error) {
      return response.status(500).json(`Failed to upload image file: ${error.message}`);
    }
  }
}