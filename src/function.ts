/**
 * @file 通过重载限定使用
 */

interface Padding {
  top: number;
  right?: number;
  bottom?: number;
  left?: number;
}

// 重载
function padding(all: number): Padding;
function padding(topAndBottom: number, leftAndRight: number): Padding;
function padding(
  top: number,
  right: number,
  bottom: number,
  left: number
): Padding;
// Actual implementation that is a true representation of all the cases the function body needs to handle
function padding(a: number, b?: number, c?: number, d?: number): Padding {
  if (b === undefined && c === undefined && d === undefined) {
    b = c = d = a;
  } else if (c === undefined && d === undefined) {
    c = a;
    d = b;
  }
  return {
    top: a,
    right: b,
    bottom: c,
    left: d
  };
}

padding(1);
padding(1, 1);
padding(1, 1, 1, 1);

// padding(1, 1, 1); // 使用了重载之后，限定了不能使用该参数
