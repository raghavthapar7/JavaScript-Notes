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
