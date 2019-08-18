function twoParams(a, b) {
    return a + b;
}
var curryOne = twoParams.bind(null, 123, 123, "123");
curryOne(123, 123, 123, 123, 123, 123, 123, 123, "123", 123);
var curryOneV2 = twoParams.bind(null, 123);
curryOneV2("123");
var curryOneV3 = twoParams.bind(null, 123, 123, "123", 123, 123, 123);
curryOneV3(123, 123, 123, 123, 123, 123, 123, 123, "123", 123);
