/*

let arr = ["a", "b", "c", "d", "e"];

// Slice Method
// Helps take a part of array
// slice(beginIndex, endIndex)
console.log(arr.slice(1, 3));

console.log(arr.slice(2));
// OUTPUT -- c,d,e

// Negative index in slice means extracting the elements from the end
console.log(arr.slice(-2));
// OUTPUT -- [ 'd', 'e' ]

// No arguments means that the whole array will be sliced. We can use it to make a shallow copy of the array
console.log(arr.slice());
// OUTPUT -- [ 'a', 'b', 'c', 'd', 'e' ]

///////////////////////////////////////////////////////////////

// Splice Method
// Same as slice but changes the array
// array.splice(beginIndex, deleteCount);

console.log(arr.splice(1, 3));
// OUTPUT -- [ 'b', 'c', 'd' ]

console.log(arr);
// OUTPUT -- [ 'a', 'e' ] Remaining array after splice

//////////////////////////////////////////////////////////////

arr = ["a", "b", "c", "d", "e"];

// Reverse method
console.log(arr.reverse());
// OUTPUT -- [ 'e', 'd', 'c', 'b', 'a' ]

//////////////////////////////////////////////////////////////

arr = ["a", "b", "c", "d", "e"];
let arr2 = ["f", "g", "h", "i", "j"];

// Concat method
// Binds two arrays together. Doesn't mutate any of the arrays together

let newArr = arr.concat(arr2);
console.log(newArr);
// OUTPUT -- [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j' ]

//////////////////////////////////////////////////////////////

// Join Method
// Uses ',' if no other argument is given

console.log(newArr.join());
// OUTPUT -- a,b,c,d,e,f,g,h,i,j

console.log(newArr.join("-"));
// OUTPUT -- a-b-c-d-e-f-g-h-i-j
*/

/* 
// The .at() method
let arr = [1, 2, 3];
console.log(arr.at(1));
// OUTPUT -- 2

// With negative argument
console.log(arr.at(-1));
// OUTPUT -- 3 

*/

/* 
// THE FOR-EACH METHOD
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.forEach((ele) => {
  console.log(`Element is - ${ele}`);
});

console.log("------------------");

// Second argument is the index in forEach
// Third argument is the whole array
arr.forEach((ele, index) => {
  console.log(`Element at ${index} - ${ele}`);
});
 */

// FIND METHOD
let arr = [1, 2, 3, 4, 5, 6, -11, 33, -4, 6, 45];

// This method returns the first element in an array that
// matches the condition of the callback function

const firstNegativeNumber = arr.find((ele) => ele < 0);
console.log(firstNegativeNumber);
