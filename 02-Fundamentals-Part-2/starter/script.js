'use strict';

class Person {
  constructor(fullName, height, mass) {
    this.fullName = fullName,
    this.height = height,
    this.mass = mass
  }

  calculateBMI() {
    this.BMI = (this.mass / (this.height ** 2)).toFixed(1);
  }

  getBMI() { return this.BMI; }
};

const mark = new Person('Mark Miller', 1.68, 78);
mark.calculateBMI();
const markBMI = mark.getBMI();

const john = new Person('John Smith', 1.95, 92);
john.calculateBMI();
const johnBMI = john.getBMI();

const checkWinner = (markBMI, johnBMI) => {
  switch (true) {
    case markBMI > johnBMI:
      return `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s BMI (${john.BMI})`;
      
    case johnBMI > markBMI:
      return `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s BMI (${mark.BMI})`;
    
    default: 
      return 'DRAW';
  }
};

const winner = checkWinner(markBMI, johnBMI);
console.log(winner); // John Smith's BMI (23.6) is higher than Mark Miller's BMI (23.2)

