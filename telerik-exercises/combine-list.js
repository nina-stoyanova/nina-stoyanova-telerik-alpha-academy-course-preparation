let input = ["2,3,1", "5,2,3"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//2, 5, 3, 2, 1, 3  ;

let firstString = gets(); //['231']
let secondString = gets(); //['523']

let firstList = firstString.split(","); //['2','3','1']
let secondList = secondString.split(","); //['5','2','3']

let result = [];

for (let i = 0; i < firstList.length; i++) {
  result.push(firstList[i]);
  result.push(secondList[i]);
}

print(result.join(","));
