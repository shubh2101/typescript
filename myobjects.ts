// function createUser({ name: string, isPaid: boolean }) {
//   console.log("user created");
// }
// wrong -- name and isPaid have any type
type User2 = {
  name: string;
  isPaid: boolean;
};
function createUser({ name, isPaid }: User2) {
  console.log("user created");
}
createUser({ name: "shubham", isPaid: true });

//bad behaviour
// createUser({ name: "shubham", isPaid: true, email: "shubh@gmail.com" });

// how to avoid
let newUser = { name: "shubham", isPaid: true, email: "shubh@gmail.com" };
createUser(newUser);

function createCourse(): { name: string; price: number } {
  return { name: "reactjs", price: 500 };
}

//type aliases
type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credcardDetails?: number;
};

let myUser: User = {
  _id: "1245",
  name: "h",
  email: "h@h.com",
  isActive: false,
};

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

myUser.email = "h@gmail.com";
// myUser._id = "asa"

export {};
