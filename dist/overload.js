function stringOrNumber(foo) {
    return foo * foo;
}
var str1 = stringOrNumber('');
var num1 = stringOrNumber(123);
var overloaded = stringOrNumber;
var str2 = overloaded('');
var num2 = overloaded(123);
function stringOrNumberNotOverload(foo) {
    if (typeof foo === "number") {
        return foo * foo;
    }
    else {
        return "hello " + foo;
    }
}
var str3 = stringOrNumberNotOverload('');
var num3 = stringOrNumberNotOverload(123);
