// let input = [
//   "13",
//   "4",
//   "1",
//   "1",
//   "4",
//   "2",
//   "3",
//   "4",
//   "4",
//   "1",
//   "2",
//   "4",
//   "9",
//   "3",
// ];
let input = ["1", "9942"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let n = +gets(); //13

let numbersToCheck = [];
for (let i = 0; i < n; i++) {
  let stringToCheck = +gets();
  numbersToCheck.push(stringToCheck);
}
let sortedNumbersToCheck = numbersToCheck.sort((a, b) => a - b);

let previous = null;
let counter = 0;
let candidateNumber = 0;
let candidateCount = 0;

for (let i = 0; i < sortedNumbersToCheck.length; i++) {
  let element = sortedNumbersToCheck[i];

  if (previous === null) {
    previous = element;
  }

  if (element === previous) {
    counter++;
  } else {
    candidateNumber = previous;
    candidateCount = counter;
    counter = 1;
  }

  if (counter > candidateCount) {
    candidateCount = counter;
    candidateNumber = element;
  }
  previous = element;
}

print(`${candidateNumber} (${candidateCount} times)`);

// function mostFrequent(array) {
//   var map = array.map(function (a) {
//     //every number in the array
//     return array.filter(function (b) {
//       //b will be part of the filtered array only if it's the same as a
//       return a === b;
//     }).length; //length of the filtered array
//   });

//   return array[map.indexOf(Math.max.apply(null, map))]; //???
// }

// print(mostFrequent(numbersToCheck));
