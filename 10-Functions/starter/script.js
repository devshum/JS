'use strict';

const flight = 'LH234';

const vlad = {
    name: 'Vlad Shum',
    passport: 24848
};

const checkIn = (flightNum, passenger) => {
    flightNum = 'LH999';

    passenger.name = 'Mr. ' + passenger.name;

    if(passenger.passport === 24848) {
        alert('Checked in')
    } else {
        alert('Wrong passport!');
    }
};

checkIn(flight, vlad);

console.log(flight);
console.log(vlad);

const newPassport = person => {
    person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(vlad);
checkIn(flight, vlad)

