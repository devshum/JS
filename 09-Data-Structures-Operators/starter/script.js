'use strict'

console.log('a+very+nice+string'.split('+'));

const [firstName, lastName] = 'Vlad Shum'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');

const capitalizeName = name => {
    const splitName = name.split(' ');
    
    const capitalizedName = [];
    
    for(const namePart of splitName) {
        // solution 1
        // capitalizedName.push(namePart[0].toUpperCase() + namePart.slice(1))
        // solution 2
        capitalizedName.push(namePart.replace(namePart[0], namePart[0].toUpperCase()));
              
    }

    return capitalizedName.join(' ');
};

console.log(capitalizeName('jessica ann smith davis'));
console.log(capitalizeName('vlad shum'));

// Padding
const message = 'Go to gate 23!'
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('Vlad'.padStart(25, '+').padEnd(35, '+'));

const maskCreditCard = number => {
    const str = number + '';
    const last = str.slice(-4);

    return last.padStart(str.length, '*');
};

console.log(maskCreditCard(4335566743356677));
console.log(maskCreditCard('3556674335667755'));

// Repeat
const message2 = 'Bad weather... All Departures Delayed...';

console.log(message2.repeat(5));

const planesInLine = n => {
    console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};

planesInLine(3);
planesInLine(9);
planesInLine(2);




