// 1. Pure Function
// A function that is deterministic and has no side effects.
Example:
// Pure function
function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 (always produces the same result for the same input)

// 2. Impure Function
// A function that either depends on or modifies external state or produces side effects.
// Example: A function that writes to a database, logs to the console, or modifies global variables.
let counter = 0;

// Impure function
function incrementCounter() {
    counter++;
    return counter;
}

console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 2 (output changes due to external state)


// 3. Higher-Order Function
// A function that either takes other functions as arguments or returns a function as its result.
Example:
function multiplyBy(factor) {
    return function(num) {
        return num * factor;
    };
}
const double = multiplyBy(2);
console.log(double(5)); // 10


// 4. First-Class Functions
// Functions that can be treated as values: assigned to variables, 
// passed as arguments, or returned from other functions.
Example:
const greet = function(name) {
    return `Hello, ${name}!`;
};
console.log(greet("Ashish")); // "Hello, Ashish!"

// 5. Recursive Function
// A function that calls itself to solve a problem.
Example:
function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}
console.log(factorial(5)); // 120

// 6. Anonymous Function
// A function without a name, often used as a callback or inline function.
Example:
setTimeout(function() {
    console.log("Anonymous function executed");
}, 1000);


// 7. Arrow Function
// A concise syntax for writing functions introduced in ES6, with lexical scoping for this.
// Example:
// const add = (a, b) => a + b;
// console.log(add(3, 4)); // 7

// 8. Callback Function
// A function passed as an argument to another function, often executed later.
// function fetchData(callback) {
//     setTimeout(() => callback("Data fetched"), 1000);
// }
//fetchData((message) => console.log(message)); // "Data fetched"

// 9. Currying
//A function that transforms a function with multiple arguments into a series of functions,
//  each accepting a single argument.

const multiply = (a) => (b) => a * b;
console.log(multiply(2)(3)); // 6

// 10. Memoized Function
// A function that caches results for previously computed inputs to improve performance.

Example:
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}
const factorial = memoize((n) => (n === 0 ? 1 : n * factorial(n - 1)));
console.log(factorial(5)); // 120


//11. Async Function
//A function that uses the async keyword and returns a Promise, often used with await.
Example:
async function fetchData() {
    const response = await fetch("https://api.example.com/data");
    return response.json();
}

//12. Generator Function
//A function that can pause execution and resume later using the yield keyword.
Example:
function* generateNumbers() {
    yield 1;
    yield 2;
    yield 3;
}
const gen = generateNumbers();
console.log(gen.next().value); // 1

//13. Closure
//A function that retains access to its lexical scope even when executed outside of that scope.
Example:
function outer() {
    const secret = "I am a closure!";
    return function() {
        return secret;
    };
}
const inner = outer();
console.log(inner()); // "I am a closure!"


//14. IIFE (Immediately Invoked Function Expression)
//A function executed immediately after it is defined.
(function() {
    console.log("IIFE executed!");
})();


//15. Variadic Function
//A function that accepts a variable number of arguments.
function sum(...nums) {
    return nums.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

//16. Throttled and Debounced Functions
//Throttling: Ensures a function is called at most once in a specified time frame.
//Debouncing: Delays the function execution until a specified time has passed since the last call.
//Example (Debounce):
function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    };
}