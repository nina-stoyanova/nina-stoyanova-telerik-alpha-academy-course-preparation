let input = ["234 145"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let pincodeNumbers = gets(); //"234 145"

let pincodeArray = pincodeNumbers.split(" "); //['234','145']

let firstPincode = pincodeArray[0]; //'234'
let secondPincode = pincodeArray[1]; //'145'

let firstPincodeArray = firstPincode.split("");
let reverseFirstPincodeArray = firstPincodeArray.reverse();
let joinFirstPincodeString = reverseFirstPincodeArray.join("");
("432");

let secondPincodeArray = secondPincode.split("");
let reverseSecondPincodeArray = secondPincodeArray.reverse();
let joinSecondPincodeString = reverseSecondPincodeArray.join("");
("541");

let result = null;

if (joinFirstPincodeString > joinSecondPincodeString) {
  result = joinFirstPincodeString;
} else {
  result = joinSecondPincodeString;
}

print(result);
