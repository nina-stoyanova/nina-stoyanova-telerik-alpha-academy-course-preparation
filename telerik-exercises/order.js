//let inputLines = ["6 6 6 6", "6"]; //first line is the first element, second the second

//let input = ["3 4 5 6"];
let input = ["5463"];
//let input = ["6443"];
//let input = ["3445"];
//let input = ["6431"];
// let input = ["6","6","5","2"]

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let heightOfPot = gets().replace(/\s/g, ""); //"5463"

let ascending = false;
let descending = false;
let mixed = false;

let previous = 0; //5, 4

for (let i = 0; i < heightOfPot.length; i++) {
  let element = heightOfPot[i];
  let current = Number(element); //5, 4, 6, 3
  if (i === 0) {
    previous = current;
    continue;
  }
  if (previous < current) {
    ascending = true;
  } else if (previous > current) {
    descending = true;
  } else {
    mixed = true;
  }
  previous = current;
}

if (mixed === true) {
  print("Mixed");
} else if ((ascending === true) & (descending === false)) {
  print("Ascending");
} else if ((descending === true) & (ascending === false)) {
  print("Descending");
} else {
  print("Mixed");
}
