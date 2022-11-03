// Define String
let s = "My name is Ashish";
console.log(s.length);
console.log(s[0]);
console.log(s.toLowerCase());
console.log(s.toUpperCase());

let replaced = s.replace("Ashish", "Manish");
console.log(replaced);

let add = s + " ok";
console.log(add);

let sliced = s.slice(0, 5);
console.log(sliced);

let search = s.search("My");
console.log(search);

let bigstring = "     notnow";
console.log(bigstring.trim());

let newstr = "file.ppt";
let splitted = newstr.split(".");
console.log(`${splitted} and ${splitted[0]} and ${splitted[1]}`);
