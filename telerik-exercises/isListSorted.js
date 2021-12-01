let input = ["3", "1,2,2,3,2", "1,2,3,4,5", "1,2,8,9,9"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let n = +gets(); // YOU GET 3 LISTS

let splitList = [];
let previous = null;
let flag = false;

for (let i = 0; i < n; i++) {
  let listOfNumbers = gets(); //EVERY LIST YOU GET (string) -> '1,2,2,3,2'
  splitList = listOfNumbers.split(","); //WE SPLIT THE LIST AND SAVE IT ->['1','2'..]
  for (let j = 0; j < splitList.length; j++) {
    let element = splitList[j];
    let number = Number(element);
    if (previous === null) {
      previous = number;
      continue;
    }
    if (previous <= number) {
      flag = true;
      previous = number;
    } else {
      flag = false;
      previous = number;
    }
  }

  if (flag === true) {
    print("true");
  } else {
    print("false");
  }

  splitList = [];
  previous = null;
  flag = false;
}
