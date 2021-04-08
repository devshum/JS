'use strict';

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 191,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';

console.log(jonas['first' + nameKey]);

console.log(jonas['last' + nameKey]);

// console.log(jonas[interestedIn]);

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';

const interestedIn = prompt('What do you want to know about Jonas? Choose between lastName, lastName, age, job, and friends');

if(jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between lastName, lastName, age, job, and friends');
}

// Challenge
// "Jonas has 3 friends, and his best friend iss called Michael"

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
