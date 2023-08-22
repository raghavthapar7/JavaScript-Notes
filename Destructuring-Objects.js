"use strict";

// Data that is to be used in the program
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// For desturturing objects, {} curly braces are used and the values
// that are to be destructured must have the same name as variables.
// The variable names can be changed later

let { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// We can change the name of the variables by doing this -

let {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, openingHours, tags);

// Nested Objects are destructured like this -
const {
  openingHours: {
    fri: { open: fridayOpening, close: fridayClosing },
  },
} = restaurant;

console.log(fridayOpening, fridayClosing);
