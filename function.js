// function declaration (we can say a function is set of statements which process the provided input and return an output)
function Abhay() {
    console.log("My debt is", 450);
}
function Shivam() {
    return 45;
}
function Shivang() {
    //let a = Shivam();
    console.log("My debt is", (Shivam() + 45));
}
// function calling
console.log("Ashish is Asking for debt");
console.log("Shivam has to give", Shivam());
console.log("Abhay and Shivang says that");
Abhay();
Shivang();


// Function Expression -->
// functions can also be created by a function expression.
//Such a function can be anonymous; it does not have to have a name. For example, the function square could have been defined as:

const square = function (number) {
  return number * number;
};

console.log(square(4)); // 16

// Function expressions are convenient when passing a function as an argument to another function. 
// The following example shows a map function that should receive a function as first argument and an array as second argument:

function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}
//In the following code, the function receives a function defined by a function expression and executes it
//  for every element of the array received as a second argument:

function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

const cube = function (x) {
  return x * x * x;
};

const numbers = [0, 1, 2, 5, 10];
console.log(map(cube, numbers)); // [0, 1, 8, 125, 1000]


//Function hoisting

console.log(square(5)); // 25

function square(n) {
  return n * n;
}
//This code runs without any error, despite the square() function being called before it's declared. 
// This is because the JavaScript interpreter hoists the entire function declaration to the top of 
// the current scope, so the code above is equivalent to:

// All function declarations are effectively at the top of the scope
function square(n) {
  return n * n;
}

console.log(square(5)); // 25

//Function hoisting only works with function declarations — not with function expressions. 


// Nested Function 
// The inner function can be accessed only from statements in the outer function.
// The inner function forms a closure: the inner function can use the arguments and variables of the outer function,
// while the outer function cannot use the arguments and variables of the inner function.

function addSquares(a, b) {
    function square(x) {
      return x * x;
    }
    return square(a) + square(b);
  }
  
  console.log(addSquares(2, 3)); // 13
  console.log(addSquares(3, 4)); // 25
  console.log(addSquares(4, 5)); // 41
  

function outside(x) {
    function inside(y) {
      return x + y;
    }
    return inside;
  }
  
  const fnInside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
  console.log(fnInside(5)); // 8
  console.log(outside(3)(5)); // 8
  
//   Notice how x is preserved when inside is returned. A closure must preserve the arguments and variables
//   in all scopes it references. Since each call provides potentially different arguments, a new closure
//   is created for each call to outside. 
//   The memory can be freed only when the returned inside is no longer accessible.


// Closure memory management -->
function outerFunction() {
  let outerVariable = "Outer";

  function innerFunction() {
      console.log(outerVariable); // Accesses `outerVariable` from closure
  }

  return innerFunction;
}

const retainedFunction = outerFunction(); // Closure is created
retainedFunction(); // Logs: Outer
retainedFunction(); // Logs: Outer again

// Memory for `outerVariable` is NOT freed because `retainedFunction` still holds a reference to `innerFunction`.
// The outerVariable remains in memory because innerFunction (via retainedFunction) keeps a reference to it.
// Each time you call retainedFunction, it accesses outerVariable from the closure.
// When Memory Will Be Freed:
// The memory will be freed only when the reference (retainedFunction) is removed:


retainedFunction = null; // Now there are no references to `innerFunction`

// At this point:
// The closure is destroyed.
// The memory for outerVariable and the function innerFunction is eligible for garbage collection.


// =====>
// Why Memory Isn't Freed After Each Call
// Closures Depend on Persistent Memory:

// Closures are designed to retain the outer function's variables so the nested function can access them consistently across multiple invocations.
// If memory were freed after each call, the nested function would lose access to those variables, breaking fundamental features like maintaining state.
// Example:

function createCounter() {
    let count = 0;

    return function () {
        count += 1;
        return count;
    };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Argument Objects in functions =====>
  //The arguments of a function are maintained in an array-like object.

//In JavaScript, arguments refer to the values passed to a function when it is invoked. 
// Let's dive into the key aspects of arguments in JavaScript:

// 1. Function Parameters and Arguments
// Parameters: The placeholders defined in the function declaration.
// Arguments: The actual values provided to the function when it is called.
Example:

function greet(name, message) { // 'name' and 'message' are parameters
    console.log(`${message}, ${name}!`);
}

greet("Ashish", "Hello"); // "Ashish" and "Hello" are arguments

//2. The arguments Object
// The arguments object is an array-like object available inside all non-arrow functions.
// It contains all the arguments passed to the function, even if the function doesn't explicitly define parameters.
// Useful when the number of arguments is unknown or variable.
// Example:

function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(sum(1, 2, 3, 4)); // 10

// Key Points about arguments:
// It is not a real array; it lacks array methods like map and forEach.
// To convert it into a real array, use Array.from(arguments) or the spread operator (...).
// 3. Rest Parameters (...)
// The ...rest syntax provides a modern way to handle variable numbers of arguments.
// It creates a real array from the remaining arguments.
Example:


function sum(...numbers) { // 'numbers' is a real array
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

// Advantages of Rest Parameters:
// Cleaner and more readable syntax.
// Supports array methods directly (unlike arguments).

// 4. Default Parameters
// Functions can have default values for parameters, which are used if no argument is provided or if the argument is undefined.
// Example:

function greet(name = "Guest", message = "Welcome") {
    console.log(`${message}, ${name}!`);
}

greet(); // Welcome, Guest!
greet("Ashish"); // Welcome, Ashish!


// 5. Using arguments in Arrow Functions
// Arrow functions do not have their own arguments object. If you need arguments, 
// use a traditional function or rest parameters.

Example:
const arrowFunc = () => {
    console.log(arguments); // Error: arguments is not defined
};

function normalFunc() {
    console.log(arguments); // Works!
}
normalFunc(1, 2, 3); // [1, 2, 3]

// 6. Passing Functions as Arguments
// Functions can also be passed as arguments to other functions (higher-order functions).

function operate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

console.log(operate(5, 3, add)); // 8
console.log(operate(5, 3, (x, y) => x * y)); // 15

// 7. The apply, call, and bind Methods
// These methods allow you to pass arguments dynamically to functions.

// 1. call Method
// The call method:
// Invokes a function immediately.
// Allows you to explicitly set the this context of the function.
// Accepts arguments passed individually (not in an array).
Syntax:
//func.call(thisArg, arg1, arg2, ...);
Example:

function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}
const admin = { name: "Admin" };

// Call `greet` with `this` bound to `user` and pass arguments individually
greet.call(admin, "Hi", ".");   // Output: Hi, Admin.

//2. apply Method
// Also invokes a function immediately.
// Explicitly sets the this context.
// Accepts arguments as an array or array-like object.
// Syntax:
//func.apply(thisArg, [arg1, arg2, ...]);
Example:
function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}

//const user = { name: "Ashish" };
// Call `greet` with arguments provided as an array
//greet.apply(user, ["Hello", "!"]); // Output: Hello, Ashish!

// 3. bind Method
// The bind method:
// Returns a new function with this and optionally some arguments pre-set.
// Does not invoke the function immediately.
// You can invoke the returned function later, with or without additional arguments.
// Syntax:
//const boundFunc = func.bind(thisArg, arg1, arg2, ...);

function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}

const user = { name: "Ashish" };
// Bind `greet` to always use `this` as `user` and a default greeting
const userGreet = greet.bind(user, "Hello");

// Call the returned function with or without additional arguments
userGreet("!"); // Output: Hello, Ashish!
userGreet("."); // Output: Hello, Ashish.



// 8. Extra Arguments Are Ignored, Missing Arguments Are undefined
// If a function is called with:

// More arguments than parameters: Extra arguments are ignored unless accessed via arguments or rest parameters.
// Fewer arguments than parameters: Missing arguments are set to undefined.
// Example:

function example(a, b, c) {
    console.log(a, b, c);
}

example(1, 2); // 1, 2, undefined
example(1, 2, 3, 4); // 1, 2, 3



                      //  First-Class Functions
// A programming language has first-class functions when functions are treated as first-class citizens.
//  This means:
// Functions can be assigned to variables.
// Functions can be passed as arguments to other functions.
// Functions can be returned from other functions.

                      //A higher-order function is a function that:
// Takes another function as an argument, or
// Returns a function as its result.