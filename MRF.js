// Map
// Creates a brand new array by mapping the array to defined function

/* 
const twice = 2;
const arr = [100, 345, 458, 513, 666];

let newArr = arr.map((i) => i * 2);
console.log(newArr);

// It also has access to the index and the whole array in the form
// of element, index, array
let newArr2 = arr.map((ele, i, arr) => {
  return `Element at ${i + 1}: ${ele}`;
});
console.log(newArr2); 
*/

// Filter
// Filters the array via some condition that we define and makes a new array

const arr = [100, 345, 458, 513, 666];
const newArr = arr.filter((ele) => ele > 500);
console.log(newArr);

const newArr2 = arr.filter((ele) => ele < 400);
console.log(newArr2);
// Reduce
// Returns a single value as it reduces the array via some operation defined
