function leapYears (input) {
let leapYear = Number(input[0]);
let normalYear = Number(input[1]);

for (let i = leapYear; i <= normalYear; i = i+4) {//1908, 1912, 1916

    console.log(i);
}


}
leapYears(["1908",
"1919"]);
