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
require("reflect-metadata");
var Test = (function () {
    function Test() {
    }
    Test.prototype.hello = function () {
        return 'hello world';
    };
    __decorate([
        Reflect.metadata('inMethod', 'B'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Test.prototype, "hello", null);
    Test = __decorate([
        Reflect.metadata('inClass', 'A')
    ], Test);
    return Test;
}());
console.log(Reflect.getMetadata('inClass', Test));
console.log(Reflect.getMetadata('inMethod', new Test(), 'hello'));
function Prop() {
    return function (target, key) {
        var type = Reflect.getMetadata('design:type', target, key);
        console.log(key + " type: " + type.name);
    };
}
var SomeClass = (function () {
    function SomeClass() {
    }
    __decorate([
        Prop(),
        __metadata("design:type", String)
    ], SomeClass.prototype, "Aprop", void 0);
    return SomeClass;
}());
