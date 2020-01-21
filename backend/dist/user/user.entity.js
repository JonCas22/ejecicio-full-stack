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
const typeorm_1 = require("typeorm");
let UserEntity = class UserEntity {
    constructor(nombre_usuario, email, avatar, contrasena, isActive, clave_activation, grupo_usuarios, apiToken, version, fecha_creacion, ultima_fecha_modificacion) { }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 500 }),
    __metadata("design:type", String)
], UserEntity.prototype, "nombre_usuario", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], UserEntity.prototype, "avatar", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], UserEntity.prototype, "contrasena", void 0);
__decorate([
    typeorm_1.Column('boolean'),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "isActive", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], UserEntity.prototype, "clave_activacion", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], UserEntity.prototype, "grupo_usuarios", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], UserEntity.prototype, "apiToken", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], UserEntity.prototype, "version", void 0);
__decorate([
    typeorm_1.Column('date'),
    __metadata("design:type", Date)
], UserEntity.prototype, "fecha_creacion", void 0);
__decorate([
    typeorm_1.Column('date'),
    __metadata("design:type", Date)
], UserEntity.prototype, "ultima_fecha_modificacion", void 0);
UserEntity = __decorate([
    typeorm_1.Entity(),
    __metadata("design:paramtypes", [String, String, String, String, Boolean, String, String, String, String, Date, Date])
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map