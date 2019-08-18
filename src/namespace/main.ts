/// <reference path="A.ts" />
// namespace 可以组合到一个文件中，而 module 只能在 amd 或者 system 下
namespace Main {
  import a = A.a; // Import Alias Declarations
  console.log(a);
  let num: a = a;
  let main = 1;
}
