"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const actor_module_1 = require("./actor/actor.module");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const archivo_module_1 = require("./archivo/archivo.module");
const pelicula_module_1 = require("./pelicula/pelicula.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'sabo.mejorseguridad.com',
                port: 56677,
                username: '101grados',
                password: '123456',
                database: '101gradosdb',
                autoLoadEntities: true,
                synchronize: true,
            }),
            archivo_module_1.ArchivoModule,
            actor_module_1.MbActorModule,
            pelicula_module_1.MbPeliculaModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map