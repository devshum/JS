'use strict'

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
]

const types = []

for(let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i], typeof jonasArray[i])

    // types.push(typeof jonasArray[i])

    types[i] = typeof jonasArray[i]
}

console.log(types)

const newArr = jonasArray.map(el => typeof el)
console.log(newArr)

const years = [1991, 2007, 1969, 2020]
const ages = []


const calcAge = year => 2020 - year; 

for(let i = 0; i < years.length; i++) {
    ages.push(calcAge(years[i]))
}

console.log(ages)

const newAges = years.map(year => calcAge(year))

console.log(newAges)

// continue and break

for(let i = 0; i < jonasArray.length; i++) {

    // if(typeof jonasArray[i] === 'string') continue

    // console.log(jonasArray[i], typeof jonasArray[i])

    if(typeof jonasArray[i] === 'number') break

    console.log(jonasArray[i], typeof jonasArray[i])
}


