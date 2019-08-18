/**
 * @file 通过重载帮助函数推断返回类型
 */

// 通过可调用的接口，定义重载的函数
interface Overloaded {
  (foo: string): string;
  (foo: number): number;
}

function stringOrNumber(foo: number): number; // 此处限定了 number 参数返回 number 类型
function stringOrNumber(foo: number): string; // 定义冲突的不生效
function stringOrNumber(foo: string): string;
function stringOrNumber(foo: any): any {
  return foo * foo; // 尽管返回是错的，但是不影响
}
const str1 = stringOrNumber(""); // str 被推断为 'string'
const num1 = stringOrNumber(123); // num 被推断为 'number'

const overloaded: Overloaded = stringOrNumber;

const str2 = overloaded(""); // str 被推断为 'string'
const num2 = overloaded(123); // num 被推断为 'number'

function stringOrNumberNotOverload(foo: number | string): number | string {
  if (typeof foo === "number") {
    return foo * foo;
  } else {
    return `hello ${foo}`;
  }
}
const str3 = stringOrNumberNotOverload(""); // str 被推断为 'number | string'
const num3 = stringOrNumberNotOverload(123); // num 被推断为 'number | string'
