# What are variables

- A variable is just a holder of a value, like a box holding an item. In simple terms, a variable is a placeholder (or a box) for a value. A value in JavaScript can be either a primitive or an object.
- The variable has a name, which stricter is called identifier. Examples of variable identifiers are myNumber, name, list, item.

- The syntax of an identifier is pretty simple:

*An identifier can contain letters, digits 0..9, and special symbols $, \_. An identifier cannot start with a digit 0..9.
Examples of valid identifiers are myNumber, my*number, list1, $item, \_name, a, b, $, _._

_Examples of invalid identifiers are 1number (incorrectly starts with the digit 1), my-number (the symbol - is not allow in an identifier), function (the identifier cannot be a keyword)._

### In JavaScript, you can create 3 types of variables: using **const, let, and var** statements. Each variable type has different behavior regarding the declaration, initialization, value access, and assignment steps.

> Specific to const variable is that you have to initialize the variable with an initial value. Also, the const variable cannot be reassigned.

> let, on the other side, can be declared with or without an initial value. Also let variable value can be updated.

> var variables behave almost as let variables: can be initialized or not, as well can be reassigned.

> However, contrary to let and const, only the function body creates a scope for var variables.

- JavaScript identifiers are case sensitive.
- For example, the identifiers myNumber and mynumber are different, because the letter n has different cases in the identifiers (N vs n).

## JavaScript Data Types & Examples

| Data Types | Description                                        | Example                   |
| ---------- | -------------------------------------------------- | ------------------------- |
| String     | represents textual data                            | 'hello',"hello"           |
| Number     | an integer or a floating-point number              | 3,3.254,3e-2              |
| BigInt     | an integer with arbitrary precision                | true and false            |
| Boolean    | Any of two values: true or false                   | 90007845623n,1n           |
| undefined  | a data type whose variable is not initialized      | let a;                    |
| null       | denotes a null values                              | let a = null              |
| Symbol     | data type whose instances are unique and immutable | let value=Symbol('hello') |
| Object     | key-value pairs collection of data                 | let student = { }         |

- Here, all data types except Object are primitive data types, whereas Object is non-primitive.
