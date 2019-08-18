/**
 * @file 通过 declare global 从文件模块中进入全局命名空间
 */
export {};

// 在该模块中，从文件模块中进入全局命名空间
declare global {
  interface String {
    endsWith(suffix: string): boolean;
  }
}
