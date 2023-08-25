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
