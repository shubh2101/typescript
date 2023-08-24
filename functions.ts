function signupUser(name: string, email: string, ispaid: boolean) {
  console.log(name);
}
signupUser("Shubh", "shubh@gmail.in", false);

// default value
function signupUser2(name: string, email: string, ispaid: boolean = false) {
  console.log(name);
}
signupUser2("Shubh", "shubh@gmail.in");

function upperCase(val: string) {
  val.toUpperCase();
}
upperCase("shubham");

function addtwo(num: number): number {
  return num + 2;
  //   return "hello";
}
addtwo(5);

const getHello = (s: string): string => {
  return "hello";
};

const heroes = ["thor", "spiderman", "Captain America"];

heroes.map((hero): string => {
  return `hero is ${hero}`;
  // return 2
});

//never

function handleerror(msg: string): never {
  throw new Error(msg);
}

//void
// The inferred return type is void
function noop() {
  return;
}

export {};
