console.log("Array Practice");

//6. Copying and Extracting

//slice(): Returns a shallow copy of a portion of the array.
console.log("slice()");
let arr = [1, 2, 3, 4];
let subArray = arr.slice(1, 3); // [2, 3]
console.log("original array",arr);
console.log("Shallow copy ",subArray); 

//splice(): Adds/removes elements from a specific index.
console.log("splice()");
let arr1 = [1, 2, 3];
console.log("original array",arr1);
arr1.splice(1, 1, 99); // [1, 99, 3]
// (1,1,99): index=1, how many elements to remove=1, which new element to insert=99
console.log("spliced array",arr1); 