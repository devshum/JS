'use strict';

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],

    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);

        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
    }
};

lufthansa.book(239, 'Vlad');
lufthansa.book(636, 'John Smith');
console.log(lufthansa.bookings);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah williams');

// Call method
book.call(eurowings, 23, 'Sarah Williams')

console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');

console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];

book.apply(swiss, flightData);

console.log(swiss);

book.call(swiss, ...flightData);
