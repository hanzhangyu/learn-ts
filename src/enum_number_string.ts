/**
 * @file 与字符或者数字关联的枚举 与 字符或者数字 赋值表现
 */
enum Color {
  red = "red",
  blue = "blue"
}

enum ColorNum {
  red,
  blue
}

let color = Color.red;
let colorNum = ColorNum.red;
let num = 1;
let str = "1";

// 字符串比较繁琐，只能赋值给字符串，不能被字符串赋值
// color = str;
str = color;
// color = num;
// num = color;

// 与数字关联的很好理解，只有数字可以互相赋值
colorNum = num;
num = colorNum;
// colorNum = str;
// str = colorNum;
