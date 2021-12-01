//let input = ["2"];
let input = ["Q"];
// let input = ["K"];
// let input = ["A"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let string = gets();

let pattern = /[2-9JQKA]/gm; //this is an object
let isMatch = pattern.test(string);

if (isMatch) {
  print(`yes ${string}`);
} else {
  print(`no ${string}`);
}
