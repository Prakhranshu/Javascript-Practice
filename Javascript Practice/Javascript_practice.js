console.log("String Practice");

//4. Splitting and Joining

//split(delimiter): Splits a string into an array based on a delimiter.
console.log("split()");
let str = "a,b,c";
console.log(str.split(",")); // ["a", "b", "c"]

//Joining (Using Array.join()): You can join strings back using .join() on arrays.
console.log("Array.join()");
let arr = ["a", "b", "c"];
console.log(arr.join("-")); // "a-b-c"