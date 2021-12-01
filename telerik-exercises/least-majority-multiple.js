let input = ["30", "42", "70", "35", "90"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let firstNum = +gets();
let secondNum = +gets();
let thirdNum = +gets();
let fourthNum = +gets();
let fifthNum = +gets();

let result = 0;
let counter = 0;

while (counter < 3) {
  result++;
  if (result % firstNum == 0) {
    counter++;
  }
  if (result % secondNum == 0) {
    counter++;
  }
  if (result % thirdNum == 0) {
    counter++;
  }
  if (result % fourthNum == 0) {
    counter++;
  }
  if (result % fifthNum == 0) {
    counter++;
  }

  if (counter < 3) {
    counter = 0;
  }
}

print(result);
