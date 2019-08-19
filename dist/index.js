"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("core-js");
require("string");
window.helloWorld = function () { return console.log("hello world"); };
window.helloWorld();
Math.seedrandom();
Math.seedrandom("Any string you want");
String.prototype.endsWith = function (suffix) {
    var str = this;
    return !!str && str.indexOf(suffix, str.length - suffix.length) !== -1;
};
console.log("foo bar".endsWith("bas"));
console.log("foo bas".endsWith("bas"));
