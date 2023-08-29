"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function signupUser(name, email, ispaid) {
    console.log(name);
}
signupUser("Shubh", "shubh@gmail.in", false);
// default value
function signupUser2(name, email, ispaid = false) {
    console.log(name);
}
signupUser2("Shubh", "shubh@gmail.in");
function upperCase(val) {
    val.toUpperCase();
}
upperCase("shubham");
function addtwo(num) {
    return num + 2;
    //   return "hello";
}
addtwo(5);
const getHello = (s) => {
    return "hello";
};
const heroes = ["thor", "spiderman", "Captain America"];
heroes.map((hero) => {
    return `hero is ${hero}`;
    // return 2
});
//never
function handleerror(msg) {
    throw new Error(msg);
}
//void
// The inferred return type is void
function noop() {
    return;
}
