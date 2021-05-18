'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

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

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  }
};

const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];

console.log(badNewArray);

const goodNewArray = [1, 2, ...arr];

console.log(goodNewArray);

console.log(...goodNewArray);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];

console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

console.log(menu);

// Iterables: arrays. strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);

let [firstLetter, o, n, a, lastLetter] = letters;

[firstLetter, lastLetter] = [lastLetter, firstLetter]

console.log(firstLetter, lastLetter)

const newStr = [firstLetter, o, n, a, lastLetter];
console.log(newStr);

console.log(...str);

// console.log(`${...str} Schmedtmann`);

// const ingredients = [prompt("Let's make pasta! Ingredient 1?"),
//                      prompt("Ingredient 2?"),
//                      prompt("Ingredient 3?")];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {founded: 1998, ...restaurant, founder: 'Guiseppe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};

restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy);

