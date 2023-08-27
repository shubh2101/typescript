// enum seatChoice {
//   AISLE,
//   MIDDLE,
//   WINDOW,
//   FOURTH,
// }

// for short js code
const enum seatChoice {
  AISLE,
  MIDDLE,
  WINDOW,
  FOURTH,
}

const hcSeat = seatChoice.MIDDLE;

//other ways to define
enum seatChoice2 {
  AISLE = "aisle",
  MIDDLE = "middle",
  WINDOW = "window",
  FOURTH = "fourth",
}
enum seatChoice3 {
  AISLE = "aisle",
  MIDDLE = "middle",
  WINDOW = 3,
  FOURTH,
}
enum seatChoice4 {
  AISLE = 10,
  MIDDLE,
  WINDOW,
  FOURTH,
}

export {}
