'use strict';

// Add elements
const friends = ['Michael', 'Steven', 'Peter'];

const newLength = friends.push('Jay');

console.log(friends);
console.log(newLength);

friends.unshift('John');

console.log(friends);

// Remove elements
friends.pop();
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));

console.log(friends.includes('Steven'));

if (friends.includes('Steven')) {
  console.log('You have a friend called Peter');
} 