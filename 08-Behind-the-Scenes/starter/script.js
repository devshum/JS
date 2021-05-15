'use strict';

// variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// function
console.log(addDecl(1, 2));
// console.log(addExpr(1, 2));
// console.log(addArrow(1, 2));

function addDecl(a, b) {
    return a + b;
}

const addExpr = function(a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;

// Example

if(!numProducts) deleteShoppingCard();

var numProducts = 10;

// Example
function deleteShoppingCard() {
    console.log('All products were deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

