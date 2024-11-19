console.log("Array Practice");

//2. Iterating Over Arrays

//forEach(): Executes a function for each array element.
console.log("forEach()");
let arr = [1, 2, 3];
arr.forEach(num => console.log(num)); // 1, 2, 3

//map(): Creates a new array by applying a function to each element.
console.log("map()");
let arr1 = [1, 2, 3];
let squaredarr = arr1.map(num => num * num); // [1, 4, 9]
console.log("old array",arr1); 
console.log("new squared array",squaredarr); 