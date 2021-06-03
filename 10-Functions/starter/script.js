'use strict';

const secureBooking = () => {
  let passengerCount = 0;

  return () => {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();