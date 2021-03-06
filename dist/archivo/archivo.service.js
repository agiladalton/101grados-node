"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArchivoService = void 0;
const common_1 = require("@nestjs/common");
const multer = require("multer");
const AWS = require("aws-sdk");
const multerS3 = require("multer-s3");
const uuid_1 = require("uuid");
const config_1 = require("@nestjs/config");
const path_1 = require("path");
config_1.ConfigModule.forRoot();
const spacesEndpoint = new AWS.Endpoint('ams3.digitaloceanspaces.com');
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
let ArchivoService = class ArchivoService {
    constructor() {
        this.upload = multer({
            storage: multerS3({
                s3: s3,
                bucket: AWS_S3_BUCKET_NAME,
                acl: 'public-read',
                key: function (request, file, cb) {
                    cb(null, `${uuid_1.v4().toString()}${path_1.extname(file.originalname)}`);
                },
            }),
        }).array('upload', 1);
    }
    async fileupload(req, res) {
        try {
            this.upload(req, res, function (error) {
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
        }
        catch (error) {
            throw error;
        }
    }
};
__decorate([
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ArchivoService.prototype, "fileupload", null);
ArchivoService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], ArchivoService);
exports.ArchivoService = ArchivoService;
//# sourceMappingURL=archivo.service.js.map