'use strict';

const oneWord = str => str.replaceAll(' ', '').toLowerCase();

const upperFirstWord = str => {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// Hihher-order function
const transformer = (str, fn) => {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`)
};

transformer('JavaScript is the best!', upperFirstWord);

transformer('JavaScript is the best!', oneWord);

const hight5 = () => {
    console.log('🎁');
}

document.body.addEventListener('click', hight5);

['Jonas', 'Martha', 'Adam'].forEach(hight5);