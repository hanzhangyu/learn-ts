/**
 * @file 验证规范
 * @link https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#3114-assignment-compatibility
 * @param something
 */

// 被赋值对象 T
function logName(something: { name: string }) {}

// 赋值对象 S

// 不是 Freshness，并且 T 中的每一个属性对于S来说满足一堆条件中的 Object 部分
const animal = { name: "cow", diet: "vegan, but has milk of own specie" };
logName(animal);

// ERROR Freshness 并且 出现了 not expected，即出现了 Excess Properties
// logName({ name: "matt", job: "being awesome" });

const randow = { note: `I don't have a name property` };
// logName(randow); // Error 不是Excess Properties，但是前面说的一堆条件没有一个满足

// T
function logIfHasName(something: { name?: string }) {}

// S
const person = { name: "matt", job: "being awesome" };
logIfHasName(person); // 不是 Freshness，且 T 的每个属性都可被 S 给赋值

// logIfHasName({ neme: "I just misspelled name to neme" }); // ERROR Freshness，并且 neme 在 T 中不存在
