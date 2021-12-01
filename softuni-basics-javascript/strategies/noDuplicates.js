let givenArray = ["1,2,2,3,4,4,5"];

let noDuplicatesArray = [];

let previous = null;
for (let i = 0; i < givenArray.length; i++) {
  let element = givenArray[i];
  if (previous === null) {
    noDuplicatesArray.push(element);
    previous = element;
    continue;
  }
  if (element === previous) {
    continue;
  }
  noDuplicatesArray.push(element);
  previous = element;
}

console.log(noDuplicatesArray);
