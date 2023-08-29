"use strict";
// class in JS
// class User {
//   constructor(email, name) {
//     this.email = email;
//     this.name = name;
//   }
// }
// class in TS
class User3 {
    constructor(email, name) {
        this.city = "";
        this.email = email;
        this.name = name;
    }
}
//private and public
class User4 {
    constructor(email, name) {
        this.city = "";
        this.email = email;
        this.name = name;
    }
}
const person1 = new User4("shubh@gmail", "shubh");
person1.name = "raju";
// person1.city = "jaipur"
