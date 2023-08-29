// class in JS

// class User {
//   constructor(email, name) {
//     this.email = email;
//     this.name = name;
//   }
// }

// class in TS

class User3 {
  email: string;
  name: string;
  city: string = "";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const person1 = new User3("shubh@gmail", "shubh");
