1.  JavaScript is purely an interpreted language.
    ans: false, JavaScript is a purely interpreted language, meaning that the source code is translated into machine code and executed directly by the browser or runtime environment without an explicit compilation step. Here's an example of a simple JavaScript program:

```
// Define a function called "greet"
function greet(name) {
  console.log('Hello, ' + name + '!');
}

// Call the greet function with an argument of "world"
greet('world');
```

2.  Interpretation in JavaScript starts immediately after AST?
    ans: Yes, in JavaScript, interpretation starts immediately after the creation of AST (Abstract Syntax Tree). The JavaScript engine takes the AST generated by the parser and translates it into executable code. This process is known as interpretation.

Here's a code block that demonstrates the process of creating an AST and interpreting it in JavaScript:

```
// Creating an AST
const code = 'const foo = 42;';
const ast = acorn.parse(code);

// Interpreting the AST
const interpreter = new Function(`"use strict"; ${escodegen.generate(ast)}`);
interpreter();
console.log(foo); // Output: 42
```

In this code, we first create an AST using the Acorn parser. We then generate executable code from the AST using the escodegen library. Finally, we create an interpreter using the Function constructor and execute the generated code. The output of the code is the value of the foo variable, which is 42. 03. DOM is generated using AST?
ans: False, the Document Object Model (DOM) is typically generated using an Abstract Syntax Tree (AST) representation of the source code. The AST serves as an intermediate representation of the code that can be programmatically processed to generate the corresponding DOM structure. This is commonly done in web development to dynamically generate HTML and manipulate the web page document structure using JavaScript. Here is an example code snippet in JavaScript that generates a DOM element using an AST representation:

```
// Create an AST node for a div element with class "container"
const divNode = {
  type: "element",
  tagName: "div",
  attributes: [
    { name: "class", value: "container" }
  ],
  children: []
};

// Convert the AST node to a DOM element
const divElement = createElementFromAst(divNode);

// Append the div element to the document body
document.body.appendChild(divElement);
```

Note that the `createElementFromAst` function would need to be implemented to traverse the AST and generate the corresponding DOM element.

4. DOM is a part of the JavaScript engine?
   ans: The Document Object Model (DOM) is not part of the JavaScript engine itself, but rather it is a standardized way of representing and manipulating HTML and XML documents in the browser environment.
   When a web page is loaded, the browser creates a DOM tree representing the structure of the document, with each element in the tree representing an HTML or XML tag. JavaScript code can then manipulate this DOM tree by adding, removing, or modifying elements, as well as by responding to user interactions or events.
   So, while the DOM is not part of the JavaScript engine itself, it is an important component of the web platform that enables dynamic and interactive web applications, and JavaScript is the primary language used to interact with the DOM in the browser environment.

5. What does parsing mean in programming?
   ans: "Reading, writing, executing" are often used to describe the three main operations that a computer program can perform on data, whereas parsing is a specific process within the "reading" operation.

In programming, "reading" typically refers to the process of inputting data into a program, which can then be processed, analyzed, and manipulated. This can involve reading data from a file, from user input, from a network connection, or from other sources.

6.  At the core, JavaScript is a single-threaded programming language.
    ans: Even though JavaScript is single-threaded, the use of these asynchronous programming techniques allows JavaScript code to perform complex and concurrent operations without blocking the main thread. This enables JavaScript to be used for a wide range of applications, including server-side programming, desktop and mobile applications, and game development.

7.  Runtime lives inside the JavaScript engine.
    ans: False, the runtime environment for JavaScript lives inside the JavaScript engine. The runtime is responsible for executing JavaScript code and managing its interactions with the surrounding environment, such as the browser or operating system.

8.  JavaScript can handle asynchronous tasks without the help of Web APIs?
    ans: False, JavaScript can handle asynchronous tasks without the help of Web APIs, but it would not be able to perform certain types of asynchronous operations without them.

While JavaScript can handle asynchronous tasks without the help of Web APIs, these APIs provide essential functionality for performing certain types of tasks, such as making network requests or interacting with the DOM. Therefore, they are an important part of the JavaScript ecosystem and are widely used in modern web development.

9. Function execution happens inside**\_\_\_**?
   ans: function execution happens inside the call stack in JavaScript, which manages the execution contexts of functions and determines the order in which they are executed.

10. JavaScript is a garbage-collected language?
    ans:
