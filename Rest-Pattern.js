// To know the concept in full detail -
// https://www.notion.so/raghavthapar/733780ed71194329b0e149a8ee0c7917?v=b67ec89fd0d04a7bae4f0ea3f2043fd6&pvs=4

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
// A new array is formed with elements 3,4,5 with the name of others

// Functions -
const add = function (...numbers) {
  let sum = 0;
  numbers.forEach((num) => {
    sum = sum + num;
  });
  return sum;
};

console.log(add(1, 2, 3, 4));
console.log(add(1, 2));
console.log(add(1, 2, 3, 4, 5, 6, 7, 7));
