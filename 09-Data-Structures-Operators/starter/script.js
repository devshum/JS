'use strict'

const openingHours = {
  thu: {
    open: 11,
    close: 23
  },

  fri: {
    open: 9,
    close: 21,
  },

  sat: {
    open: 12,
    close: 0
  }
};

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎈'],
  [false, 'Try again!']
]);

console.log(question);

// Converting object into a map
const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);

////////////////////////////////////
console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`)
}

const answer = 3;

// answer === question.get('correct') ? 
//    console.log(question.get(true)) : 
//    console.log(question.get(false))

const result = question.get(answer === question.get('correct'));
console.log(result)

// Convert map to array

const questionArr = [...question];

const questionKeys = [...question.keys()];

const questionValues = [...question.values()];