# What are Loops and why are they used? Examples?

## What are Loops?

### Loops are a programming element that repeat a portion of code a set number of times until the desired process is complete. Repetitive tasks are common in programming, and loops are essential to save time and minimize errors.

- When programmers write code, loops allow them to shorten what could be hundreds of lines of code to just a few.This allows them to write the code once and repeat it as many times as needed, making it more likely for the program to run as expected.

- Loops make code more manageable and organized. As we learn more about programming and writing complex programs, loops will be an important element to understand and use.

## Why are Loops used?

###Lets say that we want to print a sequence of numbers. Lets say, 1 to 100 inclusive. Now without loops we would have to do the following:

```javascript
print(1);
print(2);
print(3);
```

……. and so on.

Obviously not only is this time consuming, it is also very tedious. Now, lets have a look what happens to the code if we use a loop, in this case, a for loop.

```javascript
for (let i = 1; i <= 100; i++) {
  print(i);
}
```

Now, as you can see, the code above is a lot more slick, easier to write and less time consuming. The one possible disadvantage could be that its slightly harder to write and read (from a non-developers perspective). However, even programmers with the most basic of experience should understand what you are doing with the for loop.

## Examples

### While loop - loops through a block of code as long as a specified condition is true.

```javascript
while (i < 10) {
  print(i);
  i++;
}
```

### Do...while statement- creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.

```javascript
var i = 0;
do {
  i += 1;
} while (i < 5);

print(i);
```

### The for loop has the following syntax:

```javascript
for (statement 1; statement 2; statement 3) {
  // code block to be executed
}
```

- Statement 1 is executed (one time) before the execution of the code block.

- Statement 2 defines the condition for executing the code block.

- Statement 3 is executed (every time) after the code block has been executed.

```javascript
for (let i = 0; i < 5; i++) {
  print(i);
}
```

### For...in - The JavaScript for in statement loops through the properties of an Object:

```javascript
const person = { firstName: "John", lastName: "Doe" };

let text = "";
for (let x in person) {
  text = text + person[x];
}
console.log(text);
```

### For...of - The JavaScript for of statement loops through the values of an iterable object.It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

```javascript
let language = "JavaScript";

let text = "";
for (let x of language) {
  text = text + x;
}
print(text);
```
