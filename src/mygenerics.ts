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

//Using Type parameters in generic constraints

interface Database {
  connection: string;
  usename: string;
  password: string;
}

function anotherFunc<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

anotherFunc(3, { connection: "wifi", usename: "shubh", password: "ds21" });

// using class types in generics

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
