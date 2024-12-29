                          //====> Scripting Language ==========>
//Scripting languages are often seen as a subset of programming languages. 
// The distinction is more about use cases and execution models than actual technical differences.
//  For example, while both scripting languages and programming languages can be used to build
//  complete applications, scripting languages are generally easier and faster to write and are 
// mainly focused on automating tasks or handling smaller-scale functionality.
//In summary, scripting languages are designed to automate tasks, manipulate data, 
// and interact with systems or environments in a high-level, interpretable, and often dynamic way.
//  They are typically not compiled but run directly by an interpreter, making them ideal for quick 
// development and iteration.



// ECMAScript is a standard specification for scripting languages, and JavaScript is the most widely known 
// implementation of ECMAScript. It defines the rules, guidelines, and features that
//  a scripting language should support.

// Key Points about ECMAScript:
// Definition: ECMAScript (often abbreviated as ES) is a specification that defines the behavior of scripting languages like JavaScript, JScript, and ActionScript. It ensures that different implementations of the language (like in different browsers or environments like Node.js) behave in a consistent manner.

// Origin: ECMAScript was created by ECMA International, an organization that standardizes information and communication systems. The standard was first published in 1997 (hence the name ECMAScript 1).

// Versions: The specification has gone through various versions over time, each adding new features to the language. Some of the major versions include:

// ES3 (1999): This was the version that standardized most of the core features of JavaScript (loops, conditionals, etc.).
// ES5 (2009): Introduced features like strict mode, getters/setters, and JSON support.
// ES6 (2015), also known as ECMAScript 2015: Introduced major features such as arrow functions, classes, modules (ESM), promises, and more.
// ES7 (2016) and onward: These versions introduced features like async/await, Object.entries, and many other improvements.
// Why It Matters: ECMAScript defines the language's core features and syntax, and JavaScript engines (like Chrome's V8, Firefox's SpiderMonkey, and others) implement these features according to the ECMAScript specification.
// In simpler terms, ECMAScript is a blueprint, and JavaScript (or other similar languages) is the implementation of that blueprint. So when you hear about "ES6" or "ES2020," those are specific versions of the ECMAScript standard.
// Key ECMAScript Features Over Time:
// ES6 (2015): Classes, Modules, Promises, Arrow functions, Template literals, Let/Const.
// ES7 (2016): Exponentiation operator (**), async/await (later finalized).
// ES8 (2017): Object.entries, Object.values, async/await, Shared memory and atomics.
// ES9 (2018): Asynchronous iteration, rest/spread properties for objects.
// ES10 (2019): Array.flat, Array.flatMap, Object.fromEntries, String.trimStart/trimEnd, etc.
// In short, ECMAScript is the foundation that defines how JavaScript should behave, and each version of ECMAScript brings new features and changes to the language.




// CommonJS (CJS) // exports  and module.exports are keyword of CommonJS
// Definition: CommonJS is a module system used primarily in Node.js for managing modules.
//  It allows you to import and export code between different files.
// Key Features:
// Synchronous Loading: CommonJS loads modules synchronously, meaning it waits for one module to be loaded before moving on to the next.
// Exporting: You use module.exports to export a module or object, making it available for other files.

 // export in CommonJS
module.exports = function() {
  console.log("Hello from CommonJS");
};
// Importing: You use require() to import the module.

// // import in CommonJS
const greet = require('./greet');
greet();



// ES Modules (ESM)
// Definition: ES Modules is the native module system introduced in ECMAScript 6 (ES6) 
// and now supported in modern JavaScript environments like browsers and Node.js.

// Key Features:
// Asynchronous Loading: ES Modules support asynchronous loading of modules,
// making them better suited for modern web applications where scripts are loaded dynamically.
// Exporting: You use export to export variables, functions, or objects.

 // export in ESM
export function greet() {
  console.log("Hello from ESM");
};

// Importing: You use import to bring in modules.
// import in ESM
import { greet } from './greet.js';
greet();

//  ==========================>>>>>>>>>>>>Differences:
// Syntax: CommonJS uses require() for importing and module.exports for exporting, while ES Modules use import and export.
// Loading: CommonJS is synchronous, while ES Modules are asynchronous.
// Compatibility: ES Modules are the standard in browsers and are being adopted in Node.js, but CommonJS is still widely used in Node.js for server-side development.
// File Extensions: In ES Modules, you need to include file extensions like .js or .mjs for imports, whereas CommonJS doesn’t require this in most cases.
// In Node.js, both systems can be used, but you need to configure the environment to support ES Modules (either by using .mjs file extension
//  or setting "type": "module" in the package.json).



//            =======================>>>>>Why This Difference?<<<<<<<<<<<<<<<===============
// CommonJS:
// Designed specifically for Node.js, with module.exports and require() as its core export/import mechanisms.
// More dynamic: You can reassign module.exports at any time.\

// ES Modules:
// Designed as part of the ECMAScript standard for modern JavaScript.
// More static: The structure of exports is determined at compile-time, not runtime.

 //default export is a feature of ECMAScript Modules (ESM). It allows you to export a single value, 
 // function, or class from a module as the default export, which can then be imported without using
 //  curly braces in another module.

// file: mathUtils.js
export default function add(a, b) {
    return a + b;
}
// file: main.js
import add from './mathUtils.js';
console.log(add(2, 3)); // Outputs: 5

//A module can have only one default export.
//Attempting to declare multiple default exports will result in an error.
//You can combine default and named exports in the same file:

export default function add(a, b) {
    return a + b;
}

export const PI = 3.14159;
// Importing both:

import add, { PI } from './mathUtils.js';
console.log(add(2, 3)); // Outputs: 5
console.log(PI); // Outputs: 3.14159
//In contrast, CommonJS modules, the default module system in Node.js before the adoption of ESM, 
// use module.exports and require() for exporting and importing. CommonJS does not have a native 
// concept of default exports but mimics it by assigning a value to module.exports.                        
//          ======================>How TypeScript Handles <===========================

//TypeScript supports both CommonJS and ES Modules (ESM).
//  It allows you to configure the module system you want to use in your project through the
//  tsconfig.json file. Here's how it works:

// 1. Configuring the Module System
// The module system is controlled by the module option in tsconfig.json. TypeScript compiles your
//  TypeScript files (.ts) into JavaScript (.js) files using the specified module system.

// CommonJS
// {
//   "compilerOptions": {
//     "module": "CommonJS"
//   }
// }
// const greet = () => console.log("Hello");
module.exports = { greet };

//ES Modules
// {
//   "compilerOptions": {
//     "module": "ESNext"
//   }
// }
// export const greet = () => console.log("Hello");


//2. Mixing Both Systems
//While TypeScript supports both systems, the module system must be consistent across the project. 
// You can, however, consume modules from both systems in the following ways:
// Just need to set flag in compilerOptions in tsConfig esModuleInterop = true 
