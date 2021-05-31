'use strict'

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
first_name
Some_Variable 
calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const btn = document.querySelector('button');

let count = 0;
let textArea = document.querySelector('textarea');

// btn.addEventListener('click', () => {
//     count++;

//     let [firstWord, secondWord] = textArea.value.toLowerCase()
//                                                 .split('_');

//     textArea.value = '';

//     [firstWord, secondWord = secondWord.replace(secondWord[0], secondWord[0].toUpperCase())];

//     console.log(`${firstWord + secondWord} ${'✅'.repeat(count)}`);
// });


btn.addEventListener('click', () => {
    const strings = textArea.value.split('\n');

    for(const [i, string] of strings.entries()) {
        let [firstWord, secondWord] = string.toLowerCase()
                                            .trim()
                                            .split('_');

        [firstWord, secondWord = secondWord.replace(secondWord[0], secondWord[0]
                                           .toUpperCase())];

        const output = (firstWord + secondWord).padEnd(20) + '✅'.repeat(i + 1);

        console.log(output);
    }
});
