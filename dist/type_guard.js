function doSome(x) {
    if (typeof x === "string") {
        console.log(x.substr(1));
    }
}
var Foo = (function () {
    function Foo() {
        this.foo = 123;
        this.common = "123";
    }
    return Foo;
}());
var Bar = (function () {
    function Bar() {
        this.bar = 123;
        this.common = "123";
    }
    return Bar;
}());
function doStuff(arg) {
    if (arg instanceof Foo) {
        console.log(arg.foo);
    }
    if (arg instanceof Bar) {
        console.log(arg.bar);
    }
}
doStuff(new Foo());
doStuff(new Bar());
function doStuff2(q) {
    if ("x" in q) {
        console.log(q.x);
    }
    else {
        console.log(q.y);
    }
}
function doStuff3(arg) {
    if (arg.kind === "foo") {
        console.log(arg.foo);
    }
    else {
        console.log(arg.bar);
    }
}
function isFoo(arg) {
    return arg.foo !== undefined;
}
function doStuff4(arg) {
    if (isFoo(arg)) {
        console.log(arg.foo);
    }
    else {
        console.log(arg.bar);
    }
}
doStuff4({ foo: 123, common: "123" });
doStuff4({ bar: 123, common: "123" });
