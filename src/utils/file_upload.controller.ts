import { Controller, Post, Req, Res, UploadedFiles } from '@nestjs/common';
import { FileUploadService } from './file_upload.service';

@Controller('fileupload')
export class FileUploadController {
  constructor(
    private readonly fileUploadController: FileUploadService
  ) {}

  @Post()
  async create(@Req() request, @Res() response) {
    try {
      await this.fileUploadController.fileupload(request, response);
    } catch (error) {
      return response.status(500).json(`Failed to upload image file: ${error.message}`);
    }
  }

  @Post('subirArchivos')
  async subirArchivos(@UploadedFiles() files, @Res() response) {
    try {
      //return await this.fileUploadService.fileupload(file, response);
    } catch (error) {
      return response.status(500).json(`Failed to upload image file: ${error.message}`);
    }
  }
}