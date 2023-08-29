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

//private and public

class User4 {
  public email: string;
  public name: string;
  private readonly city: string = "";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const person1 = new User4("shubh@gmail", "shubh");
person1.name = "raju"
// person1.city = "jaipur"