declare const Vue: VueConstructor;

interface Vue {
  // ...
}

type DataDef<Data, V> = Data | ((this: V) => Data); // 为 data 函数绑定 this，vue 不推荐在 data 中执行 method 函数，虽然可以访问，所以直接在 TS 中禁用了

//  // 这里推断出 Data 与 Methods
type ComponentOptions<V, Data, Methods> = {
  data?: Data;
  methods?: Methods;
};

type ThisTypedComponentOptionsWithRecordProps<V, Data, Methods> = object &
  ComponentOptions<V, DataDef<Data, V>, Methods> & // 为 data 绑定单独绑定少量的属性
  ThisType<V & Data & Methods>; // 绑定该对象（deep）属性方法的上下文

interface VueConstructor<V extends Vue = Vue> {
  new (): V;
  extend<Data, Methods>(
    options: ThisTypedComponentOptionsWithRecordProps<V, Data, Methods>
  ): VueConstructor<V & Data & Methods>;
}

const Ctor = Vue.extend({
  data() {
    console.log(this);
    return { msg: 1 };
  },
  methods: {
    test(msg: number) {
      console.log(this.msg === msg);
    }
  }
});

const app = new Ctor();
app.test(app.msg);
