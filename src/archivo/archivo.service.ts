import { Req, Res, Injectable, UploadedFile } from '@nestjs/common';
import * as multer from 'multer';
import * as AWS from 'aws-sdk';
import * as multerS3 from 'multer-s3';
import { v4 as uuid } from 'uuid';
import { ConfigModule } from '@nestjs/config';
import { extname } from 'path';

ConfigModule.forRoot();

// Set S3 endpoint to DigitalOcean Spaces
const spacesEndpoint = new AWS.Endpoint(process.env.AWS_ENDPOINT);

const AWS_S3_BUCKET_NAME = process.env.AWS_S3_BUCKET_NAME;
const s3 = new AWS.S3({
    endpoint: spacesEndpoint.host,
    sslEnabled: false,
    s3ForcePathStyle: true,
    region: 'ams3'
});

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

@Injectable()
export class ArchivoService {
  constructor() {}

  async fileupload(@Req() req, @Res() res) {
    try {
      this.upload(req, res, function(error) {
        if (error) {
          console.log(error);
          return res.status(404).json(`Failed to upload file: ${error}`);
        }
        
        return res.status(201).json({
          success: true,
          message: 'Archivo subido correctamente.',
          data: req.files[0].location
        });
      });
    } catch (error) {
      throw error;
    }
  }

  upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: AWS_S3_BUCKET_NAME,
      acl: 'public-read',
      key: function(request, file, cb) {
        cb(null, `${uuid().toString()}${extname(file.originalname)}`);
      },
    }),
  }).array('upload', 1);
}