function DecoratorFactory(): PropertyDecorator {
  return function(target: Object, propertyKey: string | symbol) {
    // target 是类的 prototype，所以没有实例化属性
    console.log("decorator injected", target);
    const valuesMap = new Map<string | symbol, any>();
    // 在 prototype 上建立一次代理，实现拦截初次的赋值
    Object.defineProperty(target, propertyKey, {
      set(initialValue: any) {
        // 动态的注入，这样我们就可以使用装饰器修改 实例属性了。
        Object.defineProperty(this, propertyKey, {
          get() {
            return valuesMap.get(propertyKey);
          },
          set(value: any) {
            console.log(
              `you wanted set something to ${propertyKey.toString()} with value ${value}?`
            );
            valuesMap.set(propertyKey, value);
          },
          enumerable: true
        });

        this[propertyKey] = initialValue;
      },
      enumerable: true,
      configurable: true
    });
  };
}

class HackInstanceProperty {
  constructor() {
    console.log("constructor");
  }

  @DecoratorFactory()
  a: number;

  @DecoratorFactory()
  aa: number = 1;
}

const hackInstanceProperty = new HackInstanceProperty();
console.log(
  hackInstanceProperty.a,
  hackInstanceProperty.aa,
  hackInstanceProperty
);
hackInstanceProperty.a = 1;
hackInstanceProperty.aa = 2;
console.log(
  hackInstanceProperty.a,
  hackInstanceProperty.aa,
  hackInstanceProperty
);
hackInstanceProperty.a = 2;
hackInstanceProperty.aa = 3;
