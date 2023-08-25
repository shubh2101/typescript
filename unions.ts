let score: number | string;

score = 5;
score = "12";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let person: User | Admin = { name: "shubham", id: 233 };
person = { username: "shubh", id: 333 };

// function getDbId(id: number | string) {
//   console.log(`db id is ${id}`);
// }

getDbId(44);
getDbId("44");

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  } else {
    id + 2;
  }
}

// array

const dataNum: number[] = [2, 3, 4];
const dataStr: string[] = ["shu", "hot", "goat"];

const dataCombine: (number | string | boolean)[] = [2, 3, "Shubham", true];

// fixed union

let seatAllotment : "aisle" | "middle" | "window" 

seatAllotment = "aisle"
// seatAllotment = "crew"  //error
