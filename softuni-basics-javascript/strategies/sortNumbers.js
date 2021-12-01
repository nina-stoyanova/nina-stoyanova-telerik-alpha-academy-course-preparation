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

let numberOfElements = gets(); //number of elements in the array

let givenArray = numberOfElements.split(",").map(Number);

let sortedArray = givenArray.sort((a, b) => a - b);

print(sortedArray);

//when you use sort you have to add the function for a and b
