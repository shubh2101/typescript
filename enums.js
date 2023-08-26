var seatChoice;
(function (seatChoice) {
    seatChoice[seatChoice["AISLE"] = 0] = "AISLE";
    seatChoice[seatChoice["MIDDLE"] = 1] = "MIDDLE";
    seatChoice[seatChoice["WINDOW"] = 2] = "WINDOW";
    seatChoice[seatChoice["FOURTH"] = 3] = "FOURTH";
})(seatChoice || (seatChoice = {}));
var hcSeat = seatChoice.MIDDLE;
//other ways to define
var seatChoice2;
(function (seatChoice2) {
    seatChoice2["AISLE"] = "aisle";
    seatChoice2["MIDDLE"] = "middle";
    seatChoice2["WINDOW"] = "window";
    seatChoice2["FOURTH"] = "fourth";
})(seatChoice2 || (seatChoice2 = {}));
var seatChoice3;
(function (seatChoice3) {
    seatChoice3["AISLE"] = "aisle";
    seatChoice3["MIDDLE"] = "middle";
    seatChoice3[seatChoice3["WINDOW"] = 3] = "WINDOW";
    seatChoice3[seatChoice3["FOURTH"] = 4] = "FOURTH";
})(seatChoice3 || (seatChoice3 = {}));
var seatChoice4;
(function (seatChoice4) {
    seatChoice4[seatChoice4["AISLE"] = 10] = "AISLE";
    seatChoice4[seatChoice4["MIDDLE"] = 11] = "MIDDLE";
    seatChoice4[seatChoice4["WINDOW"] = 12] = "WINDOW";
    seatChoice4[seatChoice4["FOURTH"] = 13] = "FOURTH";
})(seatChoice4 || (seatChoice4 = {}));
