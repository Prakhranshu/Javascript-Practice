console.log("Array Practice");

//8. Reducing

//reduce(): Reduces the array to a single value by applying a function.
console.log("reduce()");
let arr = [1, 2, 3, 4];
let sum = arr.reduce((acc, num) => acc + num, 0); // 10
console.log("sum of array ",sum); 