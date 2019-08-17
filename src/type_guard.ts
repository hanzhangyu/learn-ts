/**
 * 类型守卫
 * @param x
 */

// region typeof 类型守卫
function doSome(x: number | string) {
  if (typeof x === "string") {
    // 在这个块中，TypeScript 知道 `x` 的类型必须是 `string`
    console.log(x.substr(1)); // ok
  }
  // x.substr(1); // Error: 无法保证 `x` 是 `string` 类型
}

// endregion

// region instanceof 类型守卫
class Foo {
  foo = 123;
  common = "123";
}
class Bar {
  bar = 123;
  common = "123";
}
function doStuff(arg: Foo | Bar) {
  if (arg instanceof Foo) {
    console.log(arg.foo); // ok
    // console.log(arg.bar); // Error
  }
  if (arg instanceof Bar) {
    // console.log(arg.foo); // Error
    console.log(arg.bar); // ok
  }
}
doStuff(new Foo());
doStuff(new Bar());
// endregion

// region in 类型守卫
interface A {
  x: number;
}
interface B {
  y: string;
}
function doStuff2(q: A | B) {
  if ("x" in q) {
    // q: A
    console.log(q.x); // OK
    // console.log(q.y); // Error
  } else {
    // q: B
    // console.log(q.x);
    console.log(q.y);
  }
}
// endregion

// region 字面量 类型守卫
type Foo1 = {
  kind: "foo"; // 字面量类型
  foo: number;
};

type Bar1 = {
  kind: "bar"; // 字面量类型
  bar: number;
};

function doStuff3(arg: Foo1 | Bar1) {
  if (arg.kind === "foo") {
    console.log(arg.foo); // ok
    // console.log(arg.bar); // Error
  } else {
    // 一定是 Bar
    // console.log(arg.foo); // Error
    console.log(arg.bar); // ok
  }
}
// endregion

// region 使用定义的类型保护
// @link https://www.typescriptlang.org/docs/handbook/advanced-types.html#using-type-predicates
interface Foo2 {
  foo: number;
  common: string;
}

interface Bar2 {
  bar: number;
  common: string;
}

// 用户自己定义的类型保护！
function isFoo(arg: Foo2 | Bar2): arg is Foo2 {
  return (arg as Foo2).foo !== undefined;
}

// 用户自己定义的类型保护使用用例：
function doStuff4(arg: Foo2 | Bar2) {
  if (isFoo(arg)) {
    console.log(arg.foo); // ok
    // console.log(arg.bar); // Error
  } else {
    // console.log(arg.foo); // Error
    console.log(arg.bar); // ok
  }
}

doStuff4({ foo: 123, common: "123" });
doStuff4({ bar: 123, common: "123" });
// endregion
