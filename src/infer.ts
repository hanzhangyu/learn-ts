// region 协变的位置的 多个候选类型 变为 联合
type FooInfer<T> = T extends { a: infer U; b: infer U } ? U : never;
type T10 = FooInfer<{ a: string; b: string }>; // string
type T11 = FooInfer<{ a: string; b: number }>; // string | number
// endregion

// region 逆变的位置的 多个候选类型 变为 交叉
type BarInfer<T> = T extends {
  a: (x: infer U) => void;
  b: (x: infer U) => void;
}
  ? U
  : never;
type T20 = BarInfer<{ a: (x: string) => void; b: (x: string) => void }>; // string
type T21 = BarInfer<{ a: (x: string) => void; b: (x: number) => void }>; // string & number
// endregion

// region 使用 infer 逆变 将 | 变为 &
type ToFunc<U> = U extends any ? (k: U) => void : never;
type Func = ToFunc<string | number>; // (k: string) => void) | (k: number) => void)
type FuncToIntersection = Func extends ((k: infer I) => void) ? I : never; // string & number

// 组合一下即
type UnionToIntersection<U> = (U extends any
  ? (k: U) => void
  : never) extends ((k: infer I) => void)
  ? I
  : never;
type Result = UnionToIntersection<string | number>; // string & number
// endregion

// region connect 函数实现
// @link https://github.com/LeetCode-OpenSource/hire/blob/master/typescript_zh.md
interface Action<T> {
  payload?: T;
  type: string;
}

class EffectModule {
  count = 1;
  message = "hello!";

  delay(input: Promise<number>) {
    return input.then(i => ({
      payload: `hello ${i}!`,
      type: "delay"
    }));
  }

  setMessage(action: Action<Date>) {
    return {
      payload: action.payload!.getMilliseconds(),
      type: "set-message"
    };
  }
}

type FuncName<T> = {
  [P in keyof T]: T[P] extends Function ? P : never; // function value 变为 keyName，其他变为never {count: never, asyncMethod: 'asyncMethod'}
}[keyof T]; // 获取 value
type Funcs = FuncName<EffectModule>; // 'asyncMethod' | 'syncMethod'
// prettier-ignore
type Connect = (module: EffectModule) => {
    [P in FuncName<EffectModule>]: EffectModule[P] extends <A, B>(arg: Promise<infer A>) => Promise<infer B>
        ? (arg: A) => B
        : EffectModule[P] extends <A, B>(arg: Action<infer A>) => infer B ? (arg: A) => B : never;
};

const connect: Connect = m => ({
    delay: (input: number) => ({
        type: 'delay',
        payload: `hello 2`
    }),
    setMessage: (input: Date) => ({
        type: "set-message",
        payload: input.getMilliseconds()
    })
});

type Connected = {
    delay(input: number): Action<string>;
    setMessage(action: Date): Action<number>;
};

const connected: Connected = connect(new EffectModule());
// endregion