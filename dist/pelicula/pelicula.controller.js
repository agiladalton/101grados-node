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
exports.MbPeliculaController = void 0;
const common_1 = require("@nestjs/common");
const pelicula_entity_1 = require("./pelicula.entity");
const pelicula_service_1 = require("./pelicula.service");
const respuesta_1 = require("./dto/respuesta");
let MbPeliculaController = class MbPeliculaController {
    constructor(MbPeliculaService) {
        this.MbPeliculaService = MbPeliculaService;
    }
    async create(MbPelicula) {
        return new respuesta_1.Respuesta(true, 'Proceso realizado correctamente.', await this.MbPeliculaService.create(MbPelicula));
    }
    async update(id, MbPelicula) {
        await this.MbPeliculaService.findOneAndUpdate(id, MbPelicula);
        return new respuesta_1.Respuesta(true, 'Proceso realizado correctamente.', MbPelicula);
    }
    findAll() {
        return this.MbPeliculaService.findAll();
    }
    findOne(id) {
        return this.MbPeliculaService.findOne(id);
    }
    remove(id) {
        return this.MbPeliculaService.remove(id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pelicula_entity_1.MbPelicula]),
    __metadata("design:returntype", Promise)
], MbPeliculaController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pelicula_entity_1.MbPelicula]),
    __metadata("design:returntype", Promise)
], MbPeliculaController.prototype, "update", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MbPeliculaController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MbPeliculaController.prototype, "findOne", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MbPeliculaController.prototype, "remove", null);
MbPeliculaController = __decorate([
    common_1.Controller('pelicula'),
    __metadata("design:paramtypes", [pelicula_service_1.MbPeliculaService])
], MbPeliculaController);
exports.MbPeliculaController = MbPeliculaController;
//# sourceMappingURL=pelicula.controller.js.map