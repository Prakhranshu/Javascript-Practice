console.log("Array Practice");

//4. Sorting

//sort(): Sorts the array in place (modifies original array).
console.log("sort()");
let arr = [3, 1, 4, 2];
console.log("original array",arr);
arr.sort((a, b) => a - b); // [1, 2, 3, 4] 
console.log("sorted array",arr); 

//reverse(): Reverses the order of elements in the array.
console.log("reverse()");
let arr1 = [1, 2, 3];
console.log("original array",arr1);
arr1.reverse(); // [3, 2, 1]
console.log("reversed array",arr1); 