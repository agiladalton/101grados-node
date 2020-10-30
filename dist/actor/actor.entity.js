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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MbActor = void 0;
const typeorm_1 = require("typeorm");
let MbActor = class MbActor {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: "id_actor" }),
    __metadata("design:type", Number)
], MbActor.prototype, "idActor", void 0);
__decorate([
    typeorm_1.Column({ length: 45 }),
    __metadata("design:type", String)
], MbActor.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column('int'),
    __metadata("design:type", Number)
], MbActor.prototype, "edad", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], MbActor.prototype, "foto", void 0);
MbActor = __decorate([
    typeorm_1.Entity()
], MbActor);
exports.MbActor = MbActor;
//# sourceMappingURL=actor.entity.js.map