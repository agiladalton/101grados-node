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
exports.MbActorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const actor_entity_1 = require("./actor.entity");
let MbActorService = class MbActorService {
    constructor(actorRepository) {
        this.actorRepository = actorRepository;
    }
    create(mbActor) {
        return this.actorRepository.save(mbActor);
    }
    async findAll() {
        return this.actorRepository.find();
    }
    findOne(id) {
        return this.actorRepository.findOne(id);
    }
    findOneAndUpdate(id, mbActor) {
        return this.actorRepository.update(id, mbActor);
    }
    async remove(id) {
        await this.actorRepository.delete(id);
    }
};
MbActorService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(actor_entity_1.MbActor)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MbActorService);
exports.MbActorService = MbActorService;
//# sourceMappingURL=actor.service.js.map