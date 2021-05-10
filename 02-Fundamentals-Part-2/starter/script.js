'use strict'

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`)
// }

// let rep = 1
// while (rep <= 10) {
//     console.log(`Lifting weights repetition ${rep}`)
//     rep++
// }

let randomNum = Math.floor(Math.random() * 6) + 1

while( randomNum !== 6) {
    console.log('You rolled a ' + randomNum)

    randomNum = Math.floor(Math.random() * 6) + 1

    if (randomNum === 6) console.log('Loop is about to end...')
}