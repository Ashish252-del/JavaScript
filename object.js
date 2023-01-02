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