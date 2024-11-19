console.log("String Practice");

//1. Finding and Searching

//charAt(index): Returns the character at the specified index.
console.log("charAt()");
let str = "Hello";
console.log(str.charAt(1)); // "e"

//indexOf(substring, start): Finds the first occurrence of a substring, starting from start (default is 0).
console.log("indexOf()");
let str1 = "Hello, world!";
console.log(str1.indexOf("o")); // 4

//lastIndexOf(substring, start): Finds the last occurrence of a substring, starting backward from start.
console.log("lastIndexOf()");
let str2 = "Hello, world!";
console.log(str2.lastIndexOf("o")); // 8

//includes(substring): Checks if a substring is present.
console.log("includes()");
let str3 = "Hello, world!";
console.log(str3.includes("world")); // true

//startsWith(substring) / endsWith(substring): Checks if a string starts/ends with a substring.
console.log("startsWith() / endsWith()");
let str4 = "Hello, world!";
console.log(str4.startsWith("Hello")); // true
console.log(str4.endsWith("!")); // true