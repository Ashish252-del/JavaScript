//data is transferred from backend to fronted in form of objects
//objects are heavy weight so we need to light them before transporting
//so we convert into lightweight form called as "JSON"(JAva script object notation)
//JSON basically mean convcert object into string form
// JSON is stringified object
const mydatails = {
    name: "Ashish",
    age: "21",
    city: "Gorakhur",
    job: "berojgar"
    
};
console.log("before converting");
console.log(mydatails);

// converting object into json => JSON.stringfy(Object) function is used (backend to frontend )
let jsondata = JSON.stringify(mydatails);
console.log("\After conerting into json");
console.log(jsondata);

// json needs to be converted/parsed back into object for uses at fronted
// converting json into object => JSON.parse(json) function is used at fonted to convert back into object
let convertedObject = JSON.parse(jsondata);
console.log("\n After converting json back into object");
console.log(convertedObject);