# Arrays

## What are Arrays?

### An array is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together. This makes it easier to calculate the position of each element by simply adding an offset to a base value, i.e., the memory location of the first element of the array (generally denoted by the name of the array). The base value is index 0 and the difference between the two indexes is the offset.

### In programming, most of the cases need to store a large amount of data of similar type. To store such a huge amount of data, we need to define numerous variables. It would be very tough to memorize all variable names while writing the programs. Instead, it is better to define an array and store all the elements into it.

## What kind of values can be stored in an array?

### Values that can be stored in an array can be - string, number, boolean, characters, function, object, another array.

## What ways can we use to iterate over an array?

### The ways to iterate over an array are:

- Access elements one by one
- Using loops - for loop, for-of loop, while loop, do-while loop
- Using methods - push(), pop(), shift(), unshift(), splice(), slice(), concat(), forEach(), every(), map(), filter(), reduce(), find(), flat(), findIndex()

## What are array methods? Examples?

### The methods make coding a lot easier and also make your code look clean and easy to understand. Methods give you a different ways to iterate, change, update, delete an array etc.

### Examples:

- push()

```javascript
let sports = ["soccer", "baseball"];
let total = sports.push("football", "swimming");

console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
console.log(total); // 4
```

- pop()

```javascript
var myFish = ["angel", "clown", "mandarin", "sturgeon"];

var popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]

console.log(popped); // 'sturgeon'
```

- shift()

```javascript
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]
```

- unshift()

```javascript
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]
```

- splice()

```javascript
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]
```

- slice()

```javascript
const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]
```

- concat()

```javascript
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]
```

- forEach()

```javascript
const months = ["January", "February", "March", "April"];

months.forEach(function (month) {
  console.log(month);
});
```

- map()

```javascript
const months = ["January", "February", "March", "April"];
const transformedArray = months.map(function (month) {
  return month.toUpperCase();
});

console.log(transformedArray);
```

- find()

```javascript
const employees = [
  { name: "David Carlson", age: 30 },
  { name: "John Cena", age: 34 },
  { name: "Mike Sheridan", age: 25 },
  { name: "John Carte", age: 50 },
];

const employee = employees.find(function (employee) {
  return employee.name.indexOf("John") > -1;
});

console.log(employee);
```

- filter()

```javascript
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.filter((word) => word.length > 6);

console.log(result);
```

- every()

```javascript
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
```

- reduce()

```javascript
let sum = [0, 1, 2, 3];

sum.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue;
}, 0);
```

- flat()

```javascript
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]
```

- findIndex()

```javascript
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3
```

## Which array methods return a new array?

- map()
- filter()
- flat()
- concat()
- slice()
- flat()

## Which array methods modify the original array?

- push()
- pop()
- shift()
- unshift()
- splice()
