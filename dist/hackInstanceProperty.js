var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function DecoratorFactory() {
    return function (target, propertyKey) {
        console.log("decorator injected", target);
        var valuesMap = new Map();
        Object.defineProperty(target, propertyKey, {
            set: function (initialValue) {
                Object.defineProperty(this, propertyKey, {
                    get: function () {
                        return valuesMap.get(propertyKey);
                    },
                    set: function (value) {
                        console.log("you wanted set something to " + propertyKey.toString() + " with value " + value + "?");
                        valuesMap.set(propertyKey, value);
                    },
                    enumerable: true
                });
                this[propertyKey] = initialValue;
            },
            enumerable: true,
            configurable: true
        });
    };
}
var HackInstanceProperty = (function () {
    function HackInstanceProperty() {
        this.aa = 1;
        console.log("constructor");
    }
    __decorate([
        DecoratorFactory(),
        __metadata("design:type", Number)
    ], HackInstanceProperty.prototype, "a", void 0);
    __decorate([
        DecoratorFactory(),
        __metadata("design:type", Number)
    ], HackInstanceProperty.prototype, "aa", void 0);
    return HackInstanceProperty;
}());
var hackInstanceProperty = new HackInstanceProperty();
console.log(hackInstanceProperty.a, hackInstanceProperty.aa, hackInstanceProperty);
hackInstanceProperty.a = 1;
hackInstanceProperty.aa = 2;
console.log(hackInstanceProperty.a, hackInstanceProperty.aa, hackInstanceProperty);
hackInstanceProperty.a = 2;
hackInstanceProperty.aa = 3;
