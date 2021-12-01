let input = ["42 142"]; //9

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let inputString = gets();
let inputArray = inputString.split(" ");

let firstNum = Number(inputArray[0]); //1
let secondNum = Number(inputArray[1]); //10

let counter = 0;

for (let i = firstNum; i <= secondNum; i++) {
  candidate = i.toString(); //1

  let isGoodNumber = true;

  for (let j = 0; j < candidate.length; j++) {
    let digit = Number(candidate.charAt(j)); //1
    if (digit === 0) {
      continue;
    }

    if (candidate % digit !== 0) {
      isGoodNumber = false;
      break;
    }
  }
  if (isGoodNumber) {
    counter = counter + 1;
  }
}
print(counter);
