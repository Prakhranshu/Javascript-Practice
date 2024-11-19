console.log("String Practice");

//2. Modifying Strings

//toUpperCase() / toLowerCase(): Converts the string to uppercase/lowercase.
console.log("toUpperCase() / toLowerCase()");
let str = "Hello";
console.log(str.toUpperCase()); // "HELLO"
console.log(str.toLowerCase()); // "hello"

//trim(): Removes whitespace from both ends of the string.
console.log("trim()");
let str1 = "   Hello   ";
console.log(str1.trim()); // "Hello"

//padStart(targetLength, padString) / padEnd(targetLength, padString): Pads the string to a specified length.
console.log("padStart(targetLength, padString) / padEnd(targetLength, padString)");
let str2 = "5";
console.log(str2.padStart(3, "0")); // "005"
console.log(str2.padEnd(3, "*"));  // "5**"

//replace(substring, newSubstring): Replaces the first occurrence of a substring.
console.log("replace()");
let str3 = "Hello, world!";
console.log(str3.replace("world", "JavaScript")); // "Hello, JavaScript!"

//replaceAll(substring, newSubstring): Replaces all occurrences of a substring.
console.log("replaceAll()");
let str4 = "banana";
console.log(str4.replaceAll("a", "o")); // "bonono"