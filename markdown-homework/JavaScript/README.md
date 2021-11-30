# What is JavaScript

- JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages. It is an interpreted programming language with object-oriented capabilities.

- [x] JavaScript is a lightweight, interpreted programming language.
- [x] Designed for creating network-centric applications.
- [x] Complementary to and integrated with Java.
- [x] Complementary to and integrated with HTML.
- [x] Open and cross-platform.

## Client-Side JavaScript

- Client-side JavaScript is the most common form of the language. The script should be included in or referenced by an HTML document for the code to be interpreted by the browser.

- It means that a web page need not be a static HTML, but can include programs that interact with the user, control the browser, and dynamically create HTML content.

- The JavaScript client-side mechanism provides many advantages over traditional CGI server-side scripts. For example, you might use JavaScript to check if the user has entered a valid e-mail address in a form field.

- The JavaScript code is executed when the user submits the form, and only if all the entries are valid, they would be submitted to the Web Server.

- JavaScript can be used to trap user-initiated events such as button clicks, link navigation, and other actions that the user initiates explicitly or implicitly.

## Advantages of JavaScript

> Less server interaction − You can validate user input before sending the page off to the server. This saves server traffic, which means less load on your server.

> Immediate feedback to the visitors − They don't have to wait for a page reload to see if they have forgotten to enter something.

> Increased interactivity − You can create interfaces that react when the user hovers over them with a mouse or activates them via the keyboard.

> Richer interfaces − You can use JavaScript to include such items as drag-and-drop components and sliders to give a Rich Interface to your site visitors.

## Limitations of JavaScript

1. We cannot treat JavaScript as a full-fledged programming language. It lacks the following important features −

2. Client-side JavaScript does not allow the reading or writing of files. This has been kept for security reason.

3. JavaScript cannot be used for networking applications because there is no such support available.

4. JavaScript doesn't have any multi-threading or multiprocessor capabilities.

**Once again, JavaScript is a lightweight, interpreted programming language that allows you to build interactivity into otherwise static HTML pages.**

## New JavaScript Features ECMAScript 2021

- ECMAScript 2021 is the version of ECMAScript corresponding to this year. There are some useful and awesome features that have been incorporated and used in our javascript projects

_The new JavaScript features in ECMAScript 2021 are:_

- [x] Numeric separators
- [x] String replaceAll
- [x] Logical assignment operator
- [x] And & Equals (&&=)
- [x] OR & Equals (||=)
- [x] Nullish Coalescing & Equals (??=)
- [x] Promise.any
- [x] Private class methods
- [x] Private Getters and setters
- [x] WeakRef
- [x] Finalizers

### _Numberic separators_

- This new feature allows that numeric literals use underscores as separators to help to improve readability using a visual separation between groups of digits.

### Example

```javascript
// A billion
const amount = 1_000_000_000;

// Hundreds of millions
const amount = 1_475_938.38;

// 6234500 cents (62345 dollars)
const amount = 62345_00;

// 1,734,500
const amount = 1_734_500;

// 20^30000
const amount = 2e30_000;

// Also can be used for Binary, Hex, Octal bases
```

### _String.protype.replaceAll_

- Currently, there is no way to replace all instances of a substring without the use of global regexp (/regex/g). With the new method replaceAll that change that.

### Example Before (with regex)

```javascript
const message = "hello+this+is+a+message";
const messageWithSpace = message.replace(/\+/g, " ");

// hello this is a message
```

After (with new method replaceAll)

```javascript
const message = "hello+this+is+a+message";
const messageWithSpace = message.replaceAll("+", " ");

// hello this is a message
```

### Example OR & Equals (||=)

Assign when the value is falsy. Also in the next table is explained.

With constants, x and y with a value of true when the constant has a value assigned and false in the opposite case

| x     | y     | x OR & Equals y | x after assign |
| ----- | ----- | --------------- | -------------- |
| true  | true  | true            | true           |
| true  | false | true            | true           |
| false | true  | true            | true           |
| false | false | false           | false          |

### Nullish Coalescing & Equals (??=)

- Assign when the value is null or undefined.

```javascript
let a = undefined;
a ??= 7;

// Output: a = 7
```

### Promise.any method

- The Promise.any() method returns a promise that will resolve as soon as one of the promises is resolved. If all of the promises are rejected, the method will throw an AggregateError exception holding the rejection reason

````javascript
const firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => reject(), 1000);
});

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => reject(), 2000);
});

const thirdPromise = new Promise((resolve, reject) => {
  setTimeout(() => reject(), 3000);
});

try {
  const first = await Promise.any([
    firstPromise, secondPromise, thirdPromise
  ]);
  // Any of the promises was fulfilled.
} catch (error) {
  console.log(error);
  // AggregateError: All promises were rejected
}```
````

### Private class methods

- Previously when was needed to declare a private method need to be added an underscore at the beginning of the method name (based on convention), however, that not guarantee that the method will be private. With ES2021 was added as a new feature the private class methods.

```javascript
class Test {
  #addTestRunner(testRunner) {
    this.testRunner = testRunner;
  }
}

const test = new Test();
test.addTestRunner({ name: "test" });

// Output: TypeError: test.addTestRunner is not a fun
```

### Private Getters and setters

- Previously when was needed to declare a getter or setter can be accessed by means of the instance created, with ES2021 was added as a new feature the private getters and setters.

  ```javascript
  class Test {
    get #name() {
      return "test-name";
    }
  }

  const test = new Test();
  test.name;

  // Output: undefined
  ```

  ### WeakRef

- The WeakRef, which stands for Weak References, allows you to create a weak reference to an object. A weak reference to an object is a reference that does not prevent the object from being reclaimed by the garbage collector.

- The primary use of Weak Reference is to implement caches or mappings of large objects. Where it’s desired that a large object is not kept alive solely because it appears in a cache or mapping.

```javascript
const objectExample = { name: "Juanito", lastname: "Jordan" };
const refObj = new WeakRef(objectExample);
```

- When you need to read the value of WeakRefs, need to use the deref() method to return the instance.

```javascript
const objectExample = { name: "Juanito", lastname: "Jordan" };
const refObj = new WeakRef(objectExample);
const obj = refObj.deref();
obj.name;

// Output: 'Juanito'
```

# JavaScript Engine

- A JavaScript engine is a program or an interpreter which executes JavaScript code. A JavaScript engine can be implemented as a standard interpreter, or just-in-time compiler that compiles JavaScript to bytecode in some form.
- This is a list of popular projects that are implementing a JavaScript engine:

- [x] V8 open source, developed by Google, written in C++
- [x] Rhino — managed by the Mozilla Foundation, open source, developed entirely in Java
- [x] SpiderMonkey — the first JavaScript engine, which back in the days powered Netscape Navigator, and today powers Firefox
- [x] JavaScriptCore — open source, marketed as Nitro and developed by Apple for Safari
- [x] KJS — KDE’s engine originally developed by Harri Porten for the KDE project’s Konqueror web browser
- [x] Chakra (JScript9) — Internet Explorer
- [x] Chakra (JavaScript) — Microsoft Edge
- [x] Nashorn, open source as part of OpenJDK, written by Oracle Java Languages and Tool Group
- [x] JerryScript — is a lightweight engine for the Internet of Things.

## Why was the V8 Engine created?

- The V8 Engine which is built by Google is open source and written in C++. This engine is used inside Google Chrome. Unlike the rest of the engines, however, V8 is also used for the popular Node.js runtime.
- - V8 was first designed to increase the performance of JavaScript execution inside web browsers. In order to obtain speed, V8 translates JavaScript code into more efficient machine code instead of using an interpreter. It compiles JavaScript code into machine code at execution by implementing a JIT (Just-In-Time) compiler like a lot of modern JavaScript engines do such as SpiderMonkey or Rhino (Mozilla). The main difference here is that V8 doesn’t produce bytecode or any intermediate code.

# What is node.js

- Node.js is a JavaScript runtime environment. The Node.js run-time environment includes everything you need to execute a program written in JavaScript.
- Node.js came into existence when the original developers of JavaScript extended it from something you could only run in the browser to something you could run on your machine as a standalone application.

- Now you can do much more with JavaScript than just making websites interactive.

- JavaScript now has the capability to do things that other scripting languages like Python can do.

- Both your browser JavaScript and Node.js run on the V8 JavaScript runtime engine. This engine takes your JavaScript code and converts it into a faster machine code. Machine code is low-level code which the computer can run without needing to first interpret it.
