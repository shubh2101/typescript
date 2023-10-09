const scores: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: number | string): number | string {
  return val;
}

//not good
function identityTwo(val: any): any {
  return val;
}

//using generics type
function identityThree<Type>(val: Type): Type {
  return val;
}

// identityThree(3)
// identityThree("23")
identityThree(true);

function identityFour<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  model: number;
}

identityFour<Bottle>({ brand: "local", model: 231 });
