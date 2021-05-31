'use strict'

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// fix capitalization in name
const passenger = 'vLaD'; // Vlad
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() 
                       + passengerLower.slice(1);

console.log(passengerCorrect);

const fixCapitalization = name => {
    const passengerLower = name.toLowerCase();
    const passengerCorrect = passengerLower[0].toUpperCase() 
                            + passengerLower.slice(1);

    return passengerCorrect;
};

console.log(fixCapitalization('mAsha'));

// Comparing emails
const email = 'hello@vlad.io';
const loginEmail = '  Hello@Vlad.Io '

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();


const normalizedEmail = loginEmail
                        .toLowerCase()
                        .trim();

console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$')
                       .replace(',', '.');

const announcement = 'All passengers come to barding door 23. Boarding door 23!'

console.log(announcement.replace('door', 'gate'));

console.log(announcement.replaceAll('door', 'gate'))

// Booleans
const planeNeo = 'Airbus A320neo';
console.log(planeNeo.includes('A320'));
console.log(planeNeo.startsWith('Air'));

if(plane.startsWith('Airbus') && plane.endsWith('neo')) {
    console.log('Part of the NEW Airbus family')
};

// Practice exercise 
const checkBaggage = items => {
    const baggage = items.toLowerCase()

    if(baggage.includes('knife') || baggage.includes('gun')) {
        console.log('You are NOT allowed on board')
    } else {
        console.log('Welcome aboard!');
    }
};

checkBaggage('I have a laptop, some food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
