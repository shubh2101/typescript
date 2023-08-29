"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser({ name: string, isPaid: boolean }) {
    console.log("user created");
}
createUser({ name: "shubham", isPaid: true });
//bad behaviour
// createUser({ name: "shubham", isPaid: true, email: "shubh@gmail.com" });
// how to avoid
let newUser = { name: "shubham", isPaid: true, email: "shubh@gmail.com" };
createUser(newUser);
function createCourse() {
    return { name: "reactjs", price: 500 };
}
let myUser = {
    _id: "1245",
    name: "h",
    email: "h@h.com",
    isActive: false,
};
myUser.email = "h@gmail.com";
