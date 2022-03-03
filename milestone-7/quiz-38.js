// setTimeout is asynchronous:
// Heap is a much larger region storing everything allocated dynamically.
// A stack is usually a continuous region of memory allocating local context for each executing function.
setTimeout(() => console.log('I am Superman'), 1000);
console.log('I am Superwoman');
