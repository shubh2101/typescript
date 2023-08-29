"use strict";
let score;
score = 5;
score = "12";
let person = { name: "shubham", id: 233 };
person = { username: "shubh", id: 333 };
// function getDbId(id: number | string) {
//   console.log(`db id is ${id}`);
// }
getDbId(44);
getDbId("44");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        id + 2;
    }
}
// array
const dataNum = [2, 3, 4];
const dataStr = ["shu", "hot", "goat"];
const dataCombine = [2, 3, "Shubham", true];
// fixed union
let seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew"  //error
