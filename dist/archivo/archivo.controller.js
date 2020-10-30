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
exports.ArchivoController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const archivo_service_1 = require("./archivo.service");
let ArchivoController = class ArchivoController {
    constructor(archivoService) {
        this.archivoService = archivoService;
    }
    async subir(req, response) {
        try {
            await this.archivoService.fileupload(req, response);
        }
        catch (error) {
            return response.status(500).json({
                success: false,
                message: `Failed to upload image file: ${error.message}`
            });
        }
    }
    async subirVarios(files, response) {
        try {
        }
        catch (error) {
            return response.status(500).json(`Failed to upload image file: ${error.message}`);
        }
    }
};
__decorate([
    common_1.Post('subir'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ArchivoController.prototype, "subir", null);
__decorate([
    common_1.Post('subirVarios'),
    common_1.UseInterceptors(platform_express_1.FilesInterceptor('files')),
    __param(0, common_1.UploadedFiles()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ArchivoController.prototype, "subirVarios", null);
ArchivoController = __decorate([
    common_1.Controller('archivo'),
    __metadata("design:paramtypes", [archivo_service_1.ArchivoService])
], ArchivoController);
exports.ArchivoController = ArchivoController;
//# sourceMappingURL=archivo.controller.js.map