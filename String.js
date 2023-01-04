// Define String
let s = "My name is Ashish";
console.log(s.length);
console.log(s[0]);
console.log(s.toLowerCase());
console.log(s.toUpperCase());
//Or, if we want a single character lowercased:
s[0].toLocaleLowerCase;
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

//Strings are immutable
// Strings can’t be changed in JavaScript. It is impossible to change a character.

// Let’s try it to show that it doesn’t work:

let str1 = 'Hi';

str1[0] = 'h'; // error
console.log( str1[0] ); // doesn't work

// The usual workaround is to create a whole new string and assign it to str instead of the old one.

// For instance:

let str2 = 'Hi';

str2 = 'h' + str2[1]; // replace the string

console.log( str2 ); // hi

//Searching for a substring
// str.indexOf
// The first method is str.indexOf(substr, pos).

// It looks for the substr in str, starting from the given position pos, and returns the position where the match was found or -1 if nothing can be found.

// For instance:

let sa = 'Widget with id';

console.log( sa.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
console.log( sa.indexOf('widget') ); // -1, not found, the search is case-sensitive

console.log( sa.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)