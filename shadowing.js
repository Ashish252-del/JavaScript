//What is Shadowing in JavaScript?
//Shadowing occurs when a variable declared in an inner scope (e.g., inside a function, block, or nested function)
//  has the same name as a variable declared in an outer scope. In this case:

// The inner variable "shadows" or hides the outer variable within its scope.
// Accessing the variable name in the inner scope will refer to the inner variable, not the outer one.
// This behavior is a direct result of JavaScript's scoping rules (function scope and block scope).
// Examples of Shadowing
// Basic Example

let name = "Ashish";

function greet() {
    let name = "John"; // Shadows the outer 'name'
    console.log(name); // Output: John
}

greet();
console.log(name); // Output: Ashish

// The name variable declared inside the greet function shadows the name variable declared outside the function.
// Inside the function, name refers to the inner variable.
// Outside the function, name refers to the global variable.

// Shadowing with var, let, and const
// Shadowing with var: Variables declared with var have function scope. 
// Shadowing occurs within the same or nested functions.

var x = 10;

function test() {
    var x = 20; // Shadows the outer 'x'
    console.log(x); // Output: 20
}

test();
console.log(x); // Output: 10

// Shadowing with let and const:
//  Variables declared with let or const have block scope. Shadowing occurs within a block or nested blocks.

let y = 10;

if (true) {
    let y = 20; // Shadows the outer 'y'
    console.log(y); // Output: 20
}

console.log(y); // Output: 10

// Function Parameter Shadowing
// If a function parameter has the same name as a variable in the outer scope, 
// the parameter shadows the outer variable.

let age = 30;

function showAge(age) { // Parameter shadows the outer 'age'
    console.log(age); // Output: 25
}

showAge(25);
console.log(age); // Output: 30

// Special Case: Shadowing in the Global Scope
// Declaring a variable with let or const in the global scope shadows global properties like window or globalThis.

Example:
let window = "This is not the global window";
console.log(window); // Output: This is not the global window

// Best Practices to Avoid Issues with Shadowing
// Use Descriptive Variable Names: Avoid naming variables with generic names like x, data, or value unless necessary.
// Minimize Scope: Use block-scoped variables (let and const) to reduce the chances of accidental shadowing.
// Avoid Nested Scopes When Possible: Too many nested scopes can lead to confusion and unintended shadowing.
// Linting Tools: Use linting tools like ESLint to detect and warn about shadowing issues.


                                            // Unexpected Behavior of var in Loops
// var x = 10;

// if (true) {
//     var x = 20; // Shadows the outer 'x' globally
//     console.log(x); // Output: 20
// }

// console.log(x); // Output: 20
// Here, the x inside the if block overwrites the outer x because var does not respect block scope.