'use strict';

// console.log(this);

// const calcAge = function() {
//     console.log(this);
// };

// calcAge();

const jonas = {
    year: 1991,
    calcAge: function() {
        console.log(this);
    },

    calcAgeArrow: () => {
        console.log(this)
    }
};

jonas.calcAge();
jonas.calcAgeArrow();

const matilda = {
    year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;

f()
