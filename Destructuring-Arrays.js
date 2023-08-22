"use strict";

/*
- Destructuring is an ES6 feature

This is how destructuring is done - 
*/

const arr = [2, 3, 4];
const [a, b, c] = arr; //Destructuring of the array is done
console.log(a, b, c);
console.log(arr);
// The array is not changed in any way

// Also, if we don't want some element, we can skip it
let [x, , y] = arr;
console.log(x, y);
// Hence x is 2 and y is 4

// We can swap the variables without introducing the need of a
// third variable;

[x, y] = [y, x];

// We can set the default values while destructuring the array
let [p = 1, q = 1, r = 1, s = 1] = arr;
console.log(p, q, r, s);

// We only have three values in the array so the fourth one
//  will be the default one
