/**
 * @file 从数组中拿出字符字面量
 * @link https://github.com/microsoft/TypeScript/pull/29510
 * @param o
 */

// region 之前为了 TS 而 TS 的方法
// 数组的 keyof 为 index。我们需要 value，所以需要构造{value: any}的对象
function strEnum<T extends string>(o: Array<T>): { [K in T]: K } {
    return o.reduce((res, key) => {
        res[key] = key;
        return res;
    }, Object.create(null));
}

const Direction = strEnum(['North', 'South', 'East', 'West']);
// {North: "North", ....}

type Direction = keyof typeof Direction;

let sample: Direction;

sample = Direction.North; // Okay
sample = 'North'; // Okay
// sample = 'AnythingElse'; // ERROR!
// endregion


// region easy const
const Direction1 = ['North', 'South', 'East', 'West'] as const;

let sample1: typeof Direction1[number];
sample1 = 'South'; // OK
// sample1 = 'AnythingElse'; // Error
// endregion
