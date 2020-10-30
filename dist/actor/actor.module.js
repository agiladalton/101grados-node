"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MbActorModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const archivo_service_1 = require("../archivo/archivo.service");
const actor_controller_1 = require("./actor.controller");
const actor_entity_1 = require("./actor.entity");
const actor_service_1 = require("./actor.service");
let MbActorModule = class MbActorModule {
};
MbActorModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([actor_entity_1.MbActor]),
        ],
        providers: [
            archivo_service_1.ArchivoService,
            actor_service_1.MbActorService,
        ],
        controllers: [actor_controller_1.MbActorController],
    })
], MbActorModule);
exports.MbActorModule = MbActorModule;
//# sourceMappingURL=actor.module.js.map