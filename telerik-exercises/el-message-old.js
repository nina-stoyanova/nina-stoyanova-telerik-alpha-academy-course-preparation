//let input = ["Tempera#### na @#$ata 23 grad#%&."];

let input = ["n 890@#@#@87h H$$$."];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let elMessage = gets();

let counterDifferentCharacters = 0;
let flag = false;
let winner = 0; 

for (let i = 0; i < elMessage.length; i++) {
  let element = elMessage[i];
  if (isValid(element) === true) {
    if (flag === true) {
      if (counterDifferentCharacters > winner) {
        winner = counterDifferentCharacters;
        counterDifferentCharacters = 0;
      } else {
        counterDifferentCharacters = 0;
      }
    }
    flag = false;
  } else {
    flag = true;
    counterDifferentCharacters = counterDifferentCharacters + 1;
  }
}

print(winner);

function isValid(char) {
  const pattern = /[a-zA-Z .0-9]/gm;
  //const pattern = new RegExp("[a-zA-Z .]");
  const isMatch = pattern.test(char);
  return isMatch;
}
