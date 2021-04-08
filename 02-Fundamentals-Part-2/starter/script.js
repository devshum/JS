'use strict';


const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriverLicense: true,

    calcAge() {
        this.age = 2021 - this.birthYear;
    },

    getAge() {
        return this.age;
    },

    getSummary() {
        // let hasDriversLicense;

        // switch (this.hasDriverLicense) {
        //     case true:
        //         hasDriversLicense = `has a driver's license :)`
        //         break;
        
        //     default:
        //         hasDriversLicense = `doesn't have a driver's license :(`
        //         break;
        // }

        return `${this.firstName} is a ${this.age}-year old teacher. And he ${this.hasDriverLicense 
                                                                            ? "has a driver's license" 
                                                                            : "doesn't have a driver's license"}`;
    }
};

jonas.calcAge();
const age = jonas.getAge();
const summary = jonas.getSummary();

// Challenge
// Jonas is a 30-year old teacher. and he has a driver's license

