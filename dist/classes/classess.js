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
//getters and setters
class User5 {
    constructor(email, name) {
        this.city = "";
        this.email = email;
        this.name = name;
        this._courseCount = 1;
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("couse count cant be less than 1");
        }
        this._courseCount = courseNum;
    }
    deleteToken() {
        console.log("token deleted");
    }
}
class subClass extends User5 {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCoursecount() {
        this._courseCount = 4;
    }
}
