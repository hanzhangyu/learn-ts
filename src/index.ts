import "core-js"; // 要使用一些新功能如 Map、Set、Promise（随着时间推移会变化），你可以使用现代的 lib 选项，并且需要安装 core-js：

import "string";

// region 从 global.d.ts 导入
window.helloWorld = () => console.log("hello world");
window.helloWorld();
Math.seedrandom();
Math.seedrandom("Any string you want");
// endregion

// region从文件模块中 声明的全局命名空间 src/string.ts
String.prototype.endsWith = function(suffix: string): boolean {
  const str: string = this;
  return !!str && str.indexOf(suffix, str.length - suffix.length) !== -1;
};

console.log("foo bar".endsWith("bas")); // false
console.log("foo bas".endsWith("bas")); // true
// endregion
