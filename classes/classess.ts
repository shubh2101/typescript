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
person1.name = "raju";
// person1.city = "jaipur"

//getters and setters

class User5 {
  protected _courseCount: number;
  email: string;
  name: string;
  city: string = "";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
    this._courseCount = 1;
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  set courseCount(courseNum: number) {
    if (courseNum <= 1) {
      throw new Error("couse count cant be less than 1");
    }
    this._courseCount = courseNum;
  }

  private deleteToken() {
    console.log("token deleted");
  }
}

class subClass extends User5 {
  isFamily: boolean = true;
  changeCoursecount() {
    this._courseCount = 4;
  }
}
