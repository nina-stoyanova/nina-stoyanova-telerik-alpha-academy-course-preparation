// //9 QUESTION

//let input = ['4', '9.99', '19.99', '29.99', '39.99']
let input = ["2", "50", "40"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let n = +gets();

for (let i = 0; i < n; i++) {
  //0,1,
  let next = +gets();
  let percentage = (next * 65) / 100;
  let price = next - percentage;
  print(price.toFixed(2));
}
