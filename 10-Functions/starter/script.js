'use strict';

const greet = greeting => {
    return name => {
        console.log(`${greeting} ${name}`);
    }
}

greet('Hello')('Vlad');

const greetLine = greeting => name => console.log(`${greeting} ${name}`);

greetLine('Hello')('Mr')