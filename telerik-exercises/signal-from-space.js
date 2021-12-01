let input = ["hoboobbo422222Aaao"]; //output Helo

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let message = gets(); // the message from space

let splitMessage = message.split(""); //['H','e','l','l','o']

let previous = null;
let result = [];

for (let i = 0; i < splitMessage.length; i++) {
  let element = splitMessage[i]; //'H', 'e'
  if (previous === null) {
    previous = element;
    result.push(element);
  }
  if (element === previous) {
    continue;
  } else {
    result.push(element);
    previous = element;
  }
}

print(result.join(""));
