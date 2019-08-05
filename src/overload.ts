interface Overloaded {
  (foo: string): string;
  (foo: number): number;
}

function stringOrNumber(foo: any): any {}
