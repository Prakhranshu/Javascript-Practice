console.log("Array Practice");

//3. Filtering and Searching

//filter(): Returns a new array with elements that satisfy a condition.
console.log("filter()");
let arr2 = [1, 2, 3, 4];
let even = arr2.filter(num => num % 2 === 0); // [2, 4]
console.log("even",even); 

//find(): Returns the first element that satisfies a condition.
console.log("find()");
let arr3 = [1, 2, 3, 4];
let greaterThan2 = arr3.find(num => num > 2); // 3
console.log(greaterThan2);

//findIndex(): Returns the index of the first element that satisfies a condition.
console.log("findIndex()");
let arr4 = [1, 2, 3, 4];
let index = arr4.findIndex(num => num > 2); // 2
console.log(index);