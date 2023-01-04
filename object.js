// whenever we want to store key value pair, we use objects
//An object can be created with figure brackets {…} with 
//an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), 
//and value can be anything.
const mydatails = {
    name: "Ashish",
    age: "21",
    city: "Gorakhur",
    job: "berojgar",
    // since first parameter is string hence we can write string also 
    // this notation is preferred when we our key is multi word 
    "phn":8869937302,
    "Full Name": "Ashish"
};
// printing objects
console.log(mydatails);
console.log(mydatails.name);
console.log(mydatails.job);
// Square brackets
// For multiword properties, the dot access doesn’t work:
console.log(mydatails["name"]);
console.log(mydatails["Full Name"]);
// square brackets also gives us flexibelity to get value of key by variable
let a = "city";
console.log(mydatails[a]+" by square bracket");
// dot notation do not work like this
console.log(mydatails.a);
// We can add, remove and read files from it at any time.
mydatails.rollno = 321654;
console.log(mydatails);
// deleting 
delete mydatails.job;
console.log(mydatails);


//Computed properties
// We can use square brackets in an object literal, when creating an object. That’s called computed properties.
let key = "fkey"
const newobj = {
  [key]:"Manish"
}
console.log(newobj[key]);
console.log(newobj.fkey);

//A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.
//When an object variable is copied, the reference is copied, but the object itself is not duplicated.

let user = { name: "John" };

let admin = user; // copy the reference
//Now we have two variables, each storing a reference to the same object:
//there’s still one object, but now with two variables that reference it.
//We can use either variable to access the object and modify its contents:
admin.name = "Abhay"
console.log(user.name);
let m = {};
let b = m; // copy the reference
console.log(m===b);// ture
let p = {}, q = {}
console.log(p===q);// false because thsese are two different references or address 

//An important side effect of storing objects as references is that an object declared as const can be modified.

//Cloning and merging, Object.assign
// We can also use the method Object.assign.

// The syntax is:

// Object.assign(dest, ...sources)
// The first argument dest is a target object.
// Further arguments is a list of source objects.
// It copies the properties of all source objects into the target dest, and then returns it as the result.

// For example, we have user object, let’s add a couple of permissions to it:

let user1 = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user1, permissions1, permissions2);

// now user1 = { name: "John", canView: true, canEdit: true }
// If the copied property name already exists, it gets overwritten:

let user2 = { name: "John" };

Object.assign(user2, { name: "Pete" });

console.log(user2.name); // now user = { name: "Pete" }
// We also can use Object.assign to perform a simple object cloning:

let user3 = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, user3);
console.log(clone===user3);// false because two diff objects 
console.log(clone.name); // John
console.log(clone.age); // 30
                                             //Nested cloning
  //Until now we assumed that all properties of user are primitive. But properties can be references to other objects.
  let user4 = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  let clone2 = Object.assign({}, user4);
  console.log(( user4.sizes.height ));
  console.log( user.sizes === clone.sizes ); // true, same object);
  user4.sizes.width = 60;  
  console.log(clone2.sizes.width);//because user.sizes is an object, and will be copied by reference, so clone and user will share the same sizes:
  // To fix that and make user and clone truly separate objects, we should use a cloning loop that examines each value of user[key] and, if
  //  it’s an object, then replicate 
  // its structure as well. That is called a “deep cloning” or “structured cloning”. There’s structuredClone method that implements deep cloning.

  //The call structuredClone(object) clones the object with all nested properties.
  //The structuredClone method can clone most data types, such as objects, arrays, primitive values.
// It also supports circular references, when an object property references the object itself (directly or via a chain or references).

let clone3 = structuredClone(user4);
console.log(user4.sizes===clone3.sizes);// false 

// Functions that are stored in object properties are called “methods”.
// Methods allow objects to “act” like object.doSomething().
// Methods can reference the object as this.
// The value of this is defined at run-time.

// When a function is declared, it may use this, but that this has no value until the function is called.
// A function can be copied between objects.
// When a function is called in the “method” syntax: object.method(), the value of this during the call is object.

let user5 = {
  name: "John",
  age: 30
};

user5.sayHi = function() {
  console.log("Hello!");
};

user5.sayHi(); // Hello!

// let user = {
//   // ...
// };

// // first, declare
// function sayHi() {
//   alert("Hello!");
// }

// // then add as a method
// user.sayHi = sayHi;

// user.sayHi(); // Hello!

// these objects do the same

// user = {
//   sayHi: function() {
//     alert("Hello");
//   }
// };

// method shorthand looks better, preferred
let user6 = {
  sayHi() { // same as "sayHi: function(){...}"
    console.log("Hello");
  }
};

// To access the object, a method can use the this keyword.
let user7 = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" is the "current object"
    console.log(this.name);
  }

};

user7.sayHi(); // John

// let user = {
//   name: "John",
//   age: 30,

//   sayHi() {
//     alert( user.name ); // leads to an error
//   }

// };

//The value of this is evaluated during the run-time, depending on the context.

// For instance, here the same function is assigned to two different objects and has different “this” in the calls:

// let user = { name: "John" };
// let admin = { name: "Admin" };

// function sayHi() {
//   alert( this.name );
// }

// // use the same function in two objects
// user.f = sayHi;
// admin.f = sayHi;

// // these calls have different this
// // "this" inside the function is the object "before the dot"
// user.f(); // John  (this == user)
// admin.f(); // Admin  (this == admin)

// admin['f']();  Admin (dot or square brackets access the method – doesn't matter)