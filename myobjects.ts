function createUser({ name: string, isPaid: boolean }) {
  console.log("user created");
}
createUser({ name: "shubham", isPaid: true });

//bad behaviour
createUser({ name: "shubham", isPaid: true, email: "shubh@gmail.com" });

// how to avoid
let newUser = { name: "shubham", isPaid: true, email: "shubh@gmail.com" };
createUser(newUser);

function createCourse(): { name: string; price: number } {
  return { name: "reactjs", price: 500 };
}

export {};
