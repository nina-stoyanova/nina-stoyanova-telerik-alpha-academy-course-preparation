let input = ["4,3,2,7,8,2,3,1"]; //12233478-123478
//let input = ["1,2,3,3,5"];
//let input = ["1,1,1,1,1,1,1,1"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//no dublicates
//sort

let numberOfElements = gets(); //number of elements in the array

let givenArray = numberOfElements.split(",").map(Number); //given array
let sortedGivenArray = givenArray.sort((a, b) => a - b);

let biggestNumber = givenArray[givenArray.length - 1];

let sortedNoDuplicatedArray = [];

let previous = null;
for (let i = 0; i < sortedGivenArray.length; i++) {
  let element = sortedGivenArray[i];
  if (previous === null) {
    sortedNoDuplicatedArray.push(element);
    previous = element;
    continue;
  }
  if (element === previous) {
    continue;
  }
  sortedNoDuplicatedArray.push(element);
  previous = element;
}

let fullArray = [];

for (let i = 1; i <= givenArray.length; i++) {
  fullArray.push(i);
}
//print(sortedNoDuplicatedArray); //123478
//print(fullArray); //1234'5'678

let missingElements = [];

for (let i = 0; i < fullArray.length; i++) {
  //01234567
  if (fullArray[i] === sortedNoDuplicatedArray[i]) {
    continue;
  } else {
    missingElements.push(fullArray[i]);
    fullArray.splice(i, 1);
    i = i - 1;
  }
}
print(missingElements);
