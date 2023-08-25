var score;
score = 5;
score = "12";
var person = { name: "shubham", id: 233 };
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
