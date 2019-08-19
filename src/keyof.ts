const ary = [1, 2];
const obj = {a: 1, b: 2};

const KeyofFunc = function () {
    return 1;
};


// region keyof 会包含原型
type KeyofT3 = keyof Object;
type KeyofT1 = keyof Array<string>;
type KeyofT2 = keyof Function;
type KeyofT12 = keyof Boolean;
type KeyofT13 = keyof Number;
type KeyofT14 = keyof String;
type KeyofT17 = keyof Symbol;
type KeyofT18  = keyof 1; // 会被 object wrapper
type KeyofT19  = keyof '1';
type KeyofT15 = keyof null; // 无法被 object wrapper 为 never
type KeyofT16 = keyof undefined;
// endregion

// region typeof 一个字面量对象产生的是对象的类型{a: xxx, b: xxx}
type KeyofT4 = keyof typeof obj;
type KeyofT5 = typeof obj;
type KeyofT6 = keyof ({a: number, b: number}); // 'a' | 'b'
// endregion

// region 而 typeof 数组产生的是 number[]
type KeyofT7 = typeof ary;
type KeyofT8 = keyof number[]; // type T8 = number | "length" | "toString" | "toLocaleString" | "pop" | "push" | "concat" | "join" | "reverse" | "shift" | "slice" | "sort" | "splice" | "unshift" | "indexOf" | "lastIndexOf" | ... 13 more ... | "values"
// endregion

// region 虽然 typeof 函数返回的是 可调用的箭头函数，而 keyof 可调用的箭头函数类型 为 never
type KeyofT9 = typeof KeyofFunc;
type KeyofT10 = keyof (() => number); // nerver
// endregion
