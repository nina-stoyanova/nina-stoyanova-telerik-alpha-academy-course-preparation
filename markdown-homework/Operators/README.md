# What are operators?

- JavaScript includes operators same as other languages. An operator performs some operation on single or multiple operands (data value) and produces a result. For example, in 1 + 2, the + sign is an operator and 1 is left side operand and 2 is right side operand. The + operator performs the addition of two numeric values and returns a result.
- - _Syntax:_
  - Left operand operator Right operand
  - Left operand operator

- JavaScript includes following categories of operators.
- - Arithmetic Operators
- - Comparison Operators
- - Logical Operators
- - Assignment Operators
- - Conditional Operators
- - Ternary Operator

## Arithmetic operators - Examples

> var x = 5, y = 10;

> var z = x + y; //performs addition and returns 15

> z = y - x; //performs subtraction and returns 5

> z = x \* y; //performs multiplication and returns 50

> z = y / x; //performs division and returns 2

> z = x % 2; //returns division remainder 1

## Comparison Operators - Examples

> var a = 5, b = 10, c = "5";
> var x = a;

> a == c; // returns true

> a === c; // returns false

> a == x; // returns true

> a != b; // returns true

> a > b; // returns false

> a < b; // returns true

> a >= b; // returns false

> a <= b; // returns true

## Logical Operators - Examples

> var a = 5, b = 10;

> (a != b) && (a < b); // returns true

> (a > b) || (a == b); // returns false

> (a < b) || (a == b); // returns true

> !(a < b); // returns false

> !(a > b); // returns true

## Assignment Operators - Examples

> var x = 5, y = 10, z = 15;

> x = y; //x would be 10

> x += 1; //x would be 6

> x -= 1; //x would be 4

> x \*= 5; //x would be 25

> x /= 5; //x would be 1

> x %= 2; //x would be 1

## Ternary Operator - Examples

> var a = 10, b = 5;

> var c = a > b? a : b; // value of c would be 10
> var d = a > b? b : a; // value of d would be 5

# How we compare variables - strict vs non-strict

## What is equal to (==) Operator?

- Double equals (==) is a comparison operator that transforms the operands having the same type before comparison. It tests for abstract equality. This means before doing the equality comparison it performs the necessary type conversion.

> let a = 10;

> a == 10 //true
> a == '10' //true

## What is equal to (===) Operator?

- Triple equals(===) is a strict equality comparison operator in JavaScript, that returns false for the values which are not of a similar type. It performs type casting for equality.

> let a = 10;

> a === 10 //true
> a === '10' //false

# What are if-else statements?

- The if statement executes a statement or block of code if a condition is satisfied.

```javascript
if (condition) statement;
```

- The condition can be any valid expression. In general, the condition evaluates to a Boolean value, either true or false.

- In case the condition evaluates to a non-Boolean value, JavaScript implicitly converts its result into a Boolean value by calling the Boolean() function.

- If the condition evaluates to true, the statement is executed. Otherwise, the control is passed to the next statement that follows the if statement.

```javascript
let x = 25;
if (x > 10) console.log("x is greater than 10");
```

- If-else statements

```javascript
let x = 5;
if (x > 10) {
  console.log("x is greater than 10");
} else {
  console.log("x is less than or equal 10");
}

let a = 10,
  b = 20;
if (a > b) {
  console.log("a is greater than b");
} else if (a < b) {
  console.log("a is less than b");
} else {
  console.log("a is equal to b");
}
```

- JavaScript if else shortcut: conditional operator

> condition ? expression_1 : expression_2

```javascript
age > 18 ? (
    alert("OK, you can register."),
    redirectTo("register.html");
) : (
    stop = true,
    alert("Sorry, you are too young!")
);
```

## What are switch statements?

- The objective of a switch statement is to give an expression to evaluate and several different statements to execute based on the value of the expression. The interpreter checks each case against the value of the expression until a match is found. If nothing matches, a default condition will be used.

- - _Syntax:_

```javascript
switch (expression) {
   case condition 1: statement(s)
   break;

   case condition 2: statement(s)
   break;
   ...

   case condition n: statement(s)
   break;

   default: statement(s)
}
```

- The break statements indicate the end of a particular case. If they were omitted, the interpreter would continue executing each statement in each of the following cases.

```javascript
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
```
