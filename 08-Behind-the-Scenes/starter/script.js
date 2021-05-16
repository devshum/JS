'use strict';

// var firstName = 'Matilda';

const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function() {
        console.log(this);
        console.log(2037 - this.year);

        // const self = this;
        // const isMillenial = function() {
        //     // console.log(this.year >= 1981 & this.year <= 1996)

        //     console.log(self.year >= 1981 & self.year <= 1996)
        // };

        const isMillenial = () => {
            console.log(this.year >= 1981 & this.year <= 1996)
        }

        isMillenial();
    },

    greet: () => console.log(`Hey ${this.firstName}`)
};

jonas.greet();
jonas.calcAge();

// arguments keyword
const addExpr = function(a, b) {
    console.log(arguments);
    return a + b;
}

addExpr(2, 5);
addExpr(2, 5, 8, 12);


const addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
}

addArrow(2, 5);
