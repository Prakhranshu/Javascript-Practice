console.log("Array Practice");

//5. Joining and Splitting

//join(): Joins all elements into a string, separated by a specified character.
console.log("join()");
let arr = [1, 2, 3];
let str = arr.join("-"); // "1-2-3"
console.log("original array",arr);
console.log("joined string",str); 

//split(): Splits a string into an array based on a delimiter.
console.log("split()");
let str1 = "1,2,3";
let arr1 = str1.split(","); // [1, 2, 3]
console.log("original string",str1);
console.log("joined array",arr1); 