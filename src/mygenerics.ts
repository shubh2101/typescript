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

// generics in array and arrow functions

function getSeachProduct<T>(products: T[]): T {
  // do some database operation
  return products[0]; //return firstElement
}

const getSeachArrow = <T>(products: T[]): T => {
  // do some db opertaions
  return products[3];
};
