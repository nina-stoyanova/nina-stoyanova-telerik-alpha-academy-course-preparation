function task(input) {
  let print = console.log;
  let gets =
    this.gets ||
    (
      (arr, index) => () =>
        arr[index++]
    )(input, 0);

  let elMessage = gets();

  let counter = 0;
  let flag = false;
  let result = 0;

  for (let i = 0; i < elMessage.length; i++) {
    let element = elMessage[i];
    if (isValid(element) === true) {
      continue;
    } else {
      flag = true;
      counter = counter + 1;
    }
    if (flag === false) {
      result = counter;
      counter = 0;
    }
  }

  print(result);
  return result;
}

function check(actualResult, expectedResult) {
  if (actualResult !== expectedResult) {
    throw new Error(`test error: ${expectedResult}. Not achieved.`);
  }
}

check(task(["Tempera#### na @#$ata 23 grad#%&."]), 4);

function isValid(char) {
  const pattern = /[a-zA-Z .]/gm;
  //const pattern = new RegExp("[a-zA-Z .]");
  const isMatch = pattern.test(char);
  return isMatch;
}

//console.log(isValid("$"));
