let input = ["501"]; //9

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let inputDigits = gets();

let countOfOnes = 0;
let currentMultiplicationResult = 1;
let hadBeenMultiplied = false;

for (let i = 0; i < inputDigits.length; i++) {
  let element = inputDigits[i];
  let number = Number(element);
  if (number === 0) {
    continue;
  } else if (number === 1) {
    countOfOnes = countOfOnes + number;
  } else {
    currentMultiplicationResult = currentMultiplicationResult * number;
    hadBeenMultiplied = true;
  }
}

let expectedResult = 0;
if (hadBeenMultiplied === true) {
  expectedResult = countOfOnes + currentMultiplicationResult;
} else {
  expectedResult = expectedResult + countOfOnes;
}

print(expectedResult);
