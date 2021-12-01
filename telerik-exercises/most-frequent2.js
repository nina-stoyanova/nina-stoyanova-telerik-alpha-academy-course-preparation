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

//key:5 value:13
//{5:13}
let numberToCountMap = {};

for (let i = 0; i < numbersToCheck.length; i++) {
  let element = numbersToCheck[i]; //7
  if (!numberToCountMap[element]) {
    //if the object is empty
    numberToCountMap[element] = 0; //we set it to 0
  } //else we add the number and the count
  numberToCountMap[element] = numberToCountMap[element] + 1;
}

//{5:1, 6:10, 7:2}

let keyValueArray = Object.entries(numberToCountMap);

let candidateKeyValue = null;
for (let keyValue of keyValueArray) {
  //["5",1]
  if (candidateKeyValue === null) {
    candidateKeyValue = keyValue;
    continue;
  }
  if (keyValue[1] > candidateKeyValue[1]) {
    candidateKeyValue = keyValue;
  }
}

print(`${candidateKeyValue[0]} (${candidateKeyValue[1]} times)`);
