'use strict'

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ]

// for(let i = jonas.length - 1; i >= 0; i--) {
//     console.log(jonas[i])
// }

const exercises = [
    'crunch',
    'push-up',
    'squat'
]

// for(let i = 0; i < 5; i++) {
//     for(let i = 0; i < exercises.length; i++) {
//         console.log('do the' + '' + exercises[i])
//     }
// }

for(let exercise = 1; exercise < 4; exercise++) {
    console.log(`----------------Starting exercise ${exercise}`)

    for(let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetiton ${rep} 💨`)
    }
}

