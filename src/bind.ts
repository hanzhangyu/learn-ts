/**
 * @file bind 测试，通过重载还是会使用了错误的参数个数
 * @link https://github.com/Microsoft/TypeScript/pull/27028?from=timeline&isappinstalled=0
 */

function twoParams(a: number, b: string) {
  return a + b;
}

// region bind 提供的参数个数超过了，参数类型的对应关系 还是会失效
let curryOne = twoParams.bind(null, 123, 123, "123"); // let curryOne: (...args: (string|number)[]) => string
curryOne(123, 123, 123, 123, 123, 123, 123, 123, "123", 123);
// curryOne(true);
// endregion

// region bind 提供的参数个数没有超过，表现正常
let curryOneV2 = twoParams.bind(null, 123); // let curryOneV2: (b: string) => string
curryOneV2(
  "123"
  // 123, 123, 123, 123, 123, 123, 123, 123, 123
);
// endregion

// region bind 提供的参数个数超过了 TS 允许的范围，与第一种情况表示一致
let curryOneV3 = twoParams.bind(null, 123, 123, "123", 123, 123, 123); // let curryOneV3: (...args: (string|number)[]) => string
curryOneV3(123, 123, 123, 123, 123, 123, 123, 123, "123", 123);
// endregion
