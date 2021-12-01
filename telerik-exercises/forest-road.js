let input = ["4"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let columns = +gets(); // this is how many columns 4
let rows = columns * 2 - 1; // this is how many rows 7

for (let row = 0; row < rows; row++) {
  let specialIndex = "";
  for (let col = 0; col < columns; col++) {
    if (isSpecialColumn(columns, row, col) === true) {
      specialIndex = specialIndex + "*" + " ";
    } else {
      specialIndex = specialIndex + "." + " ";
    }
  }
  print(specialIndex);
}

function isSpecialColumn(columns, row, col) {
  let reminder = row % columns;

  if (reminder === col) {
    return true;
  }
  return false;
}

// //which is the special index
// // put * for the index on every line
// //after n row - correct n - 1
