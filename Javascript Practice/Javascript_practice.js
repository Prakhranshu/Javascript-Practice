console.log("String Practice");

//3. Extracting Substrings

//slice(start, end): Extracts a portion of a string from start to end (not inclusive).
console.log("slice()");
let str = "JavaScript";
console.log(str.slice(0, 4)); // "Java" (start at index 0, end before index 4)
console.log(str.slice(-6, -1)); // "Scrip" (start 6th last to 2nd last)

//substring(start, end): Purpose: Similar to slice but doesn’t support negative indexes. 
//Special Behavior: Automatically swaps start and end if start > end.
console.log("subtring()");
let str1 = "JavaScript";
console.log(str1.substring(0, 4)); // "Java" (same as slice for positive indices)
console.log(str1.substring(4, 0)); // "Java" (swaps the indices)
console.log(str1.substring(-3, 4)); // "Java" (treats -3 as 0)

//substr(start, length): Purpose: Extracts a substring starting at start and takes length characters from there.
//Supports Negative Start: Counts from the end if start is negative.
console.log("substr()");
let str2 = "JavaScript";
console.log(str2.substr(0, 4)); // "Java" (start at index 0, take 4 characters)
console.log(str2.substr(-6, 4)); // "Scri" (start 6th last, take 4 characters)