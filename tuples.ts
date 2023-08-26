let user: [string, number, boolean];

user = ["shubh", 121, true];

let rgb: [number, number, number] = [255, 123, 185];

// weird part

type User2 = [string, number];

let newUser: User2 = ["shubham", 123];
newUser[0] = "singh";

// newUser.push(true);
//error Argument of type 'true' is not assignable to parameter of type 'number | string'.
newUser.push("33");
newUser.push("jkk");
