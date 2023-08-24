// Check the whole xplanantion of the topic here -
// https://www.notion.so/raghavthapar/Data-Structures-and-Modern-Operators-04bceea5cd894995ae45064f1a8d6d62?pvs=4

const arr = [7, 8, 9];
const badArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badArr);

const newArr = [1, 2, ...arr];
console.log(newArr);
// Same output

// Iterables
const str = "Raghav";
const letters = [...str];
console.log(letters);

// Spread operator on Objects
let info = {
  name: "Raghav Thapar",
  age: 22,
};

let updatedInfo = { ...info, job: "developer" };
console.log(updatedInfo);
