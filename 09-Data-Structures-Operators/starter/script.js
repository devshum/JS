'use strict'

console.log('a+very+nice+string'.split('+'));

const [firstName, lastName] = 'Vlad Shum'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');

// Solution 1
const capitalizeName = name => {
    const splitName = name.split(' ');
    
    const capitalizedName = [];
    
    for(const namePart of splitName) {
        capitalizedName.push(namePart[0].toUpperCase() + namePart.slice(1))
              
    }

    return capitalizedName.join(' ');
};

console.log(capitalizeName('jessica ann smith davis'));
console.log(capitalizeName('vlad shum'));



