"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MbPeliculaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const pelicula_controller_1 = require("./pelicula.controller");
const pelicula_entity_1 = require("./pelicula.entity");
const pelicula_service_1 = require("./pelicula.service");
let MbPeliculaModule = class MbPeliculaModule {
};
MbPeliculaModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([pelicula_entity_1.MbPelicula]),
        ],
        providers: [
            pelicula_service_1.MbPeliculaService,
        ],
        controllers: [pelicula_controller_1.MbPeliculaController],
    })
], MbPeliculaModule);
exports.MbPeliculaModule = MbPeliculaModule;
//# sourceMappingURL=pelicula.module.js.map