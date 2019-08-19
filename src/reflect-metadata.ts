/**
 * @file reflect-metadata 测试
 * @todo https://github.com/rbuckton/reflect-metadata/blob/master/Reflect.ts
 * @todo https://github.com/hanzhangyu/temp/blob/master/decorator-result.js
 * @link https://github.com/Microsoft/TypeScript/issues/2577 ts内部对metadata的支持
 */
import "reflect-metadata";

// region 简单使用
@Reflect.metadata('inClass', 'A')
class Test {
    @Reflect.metadata('inMethod', 'B')
    public hello(): string {
        return 'hello world';
    }
}

console.log(Reflect.getMetadata('inClass', Test)); // 'A'
console.log(Reflect.getMetadata('inMethod', new Test(), 'hello')); // 'B'
// endregion

// region 访问 ts 提供的metadata
function Prop(): PropertyDecorator {
    return (target, key: string) => {
        const type = Reflect.getMetadata('design:type', target, key);
        console.log(`${key} type: ${type.name}`);
        // other...
    };
}

class SomeClass {
    @Prop()
    public Aprop!: string;
}
// endregion