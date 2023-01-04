// Array
let arr = [1, 2, 3, 4];
console.log(arr);
console.log(arr.length);
console.log(arr[3]);
arr[2] = 10;
console.log(arr);
for (let i = 0; i < arr.length; i++)
    console.log(arr[i]);
arr.push(500); console.log(arr);
arr.pop(); console.log(arr);
//map, in map we can perform operation for every element of array
arr.map((v) => console.log(v * 10));
// filter , here we use a condition in arrow fat function
const ages = [20, 12, 35, 45];
const result = ages.filter((v) => { return v != 12; })
console.log(result);

// arr.push(...items) – adds items to the end,
// arr.pop() – extracts an item from the end,
// arr.shift() – extracts an item from the beginning,
// arr.unshift(...items) – adds items to the beginning.

                                                //    splice
                                                let ar = ["I", "study", "JavaScript"];

                                                ar.splice(1, 1); // from index 1 remove 1 element
                                                
                                                console.log( ar ); // ["I", "JavaScript"]

                                                // Here we can see that splice returns the array of removed elements:

let array = ["I", "study", "JavaScript", "right", "now"];

// remove 2 first elements
let removed = array.splice(0, 2);

console.log( removed ); // "I", "study" <-- array of removed elements

// Object.keys, values, entries
// For plain objects, the following methods are available:

// Object.keys(obj) – returns an array of keys.
// Object.values(obj) – returns an array of values.
// Object.entries(obj) – returns an array of [key, value] pairs.

let user = {
    name: "John",
    age: 30
  };
//   Object.keys(user) => ["name", "age"]
// Object.values(user) => ["John", 30]
// Object.entries(user) => [ ["name","John"], ["age",30] ]

// Transforming objects
// Objects lack many methods that exist for arrays, e.g. map, filter and others.

// If we’d like to apply them, then we can use Object.entries followed by Object.fromEntries:

// Use Object.entries(obj) to get an array of key/value pairs from obj.
// Use array methods on that array, e.g. map, to transform these key/value pairs.
// Use Object.fromEntries(array) on the resulting array to turn it back into an object.
// For example, we have an object with prices, and would like to double them:

// let prices = {
//   banana: 1,
//   orange: 2,
//   meat: 4,
// };

// let doublePrices = Object.fromEntries(
//   // convert prices to array, map each key/value pair into another pair
//   // and then fromEntries gives back the object
//   Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
// );

// alert(doublePrices.meat); // 8