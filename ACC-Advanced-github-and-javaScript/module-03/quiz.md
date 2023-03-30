1. The name of the garbage collection algorithm in JavaScript is **?**
   Ans: Mark-and-Sweep.
   The JavaScript engine manages the memory allocation and garbage collection process internally, and developers do not need to explicitly manage the memory in their programs.
2. Event loop gives more priority to **\_\_**.
   Ans: Microtask Queue. The event loop in JavaScript processes events from the event queue and executes the associated callback functions. The event loop follows a specific set of rules for processing events and callbacks.
3. After the creation of the global execution context, the top-level code gets executed.
   Ans: Yes, that statement is generally true for JavaScript programs running in a browser or Node.js environment.

4.

```
   console.log("Task 1");
   setTimeout(() => {
   console.log("Task 2");
   }, 5000);
   console.log("Task 3");
   setTimeout(() => {
   console.log("Task 4");
   }, 0);
   console.log("Task 5");
```

In what sequence the logs will appear? (Try to answer the question without running the code.)
Ans: Task 1
Task 3
Task 5
Task 4
Task 2 5.

```
   "use strict";
   const func = () => {
   console.log(this);
   };
```

What would print in the console of the browser ??

Ans: Window object.

6.

```
   var name = "Hero";
   function changeName() {
   console.log(name);
   var name = "Alam";
   }
```

What would print in console if we invoke changeName() ?
Ans: undefined.

7.

```
   const count = () => {
   for (var i = 1; i < 5; i++) {}
   console.log(i);
   };
   count();
```

What will appear in console ?

Ans: 4.

8.  Function execution contexts are created when the Global Execution context is being created.
    Ans: False.

9.

```
   const car = {
    imported: 250,
    price: 26500000,
    calc: function () {
    console.log(this.price \* this.imported);
    },
    };
    const bike = {
    imported: 150,
    price: 2200000,
    };

bike.calc();
```

What would be the output ?
Ans: Type error.

10.

```
   const b = 5;
    function calc(num1, num2) {
    const a = num1;
    const b = 2;
    function sum() {
    return a + b;
    }
    function sub() {
    return a - b;
    }
    var summationResult = sum();
    var subtractionResult = sub();
    return { summationResult, subtractionResult };
    }
    const result = calc(5, 15);
    console.log(result);
```

What would be the output?

Ans: { summationResult: 7, subtractionResult: 3 }
