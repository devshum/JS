// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const temperatures = [3, -2, -6, -1, 'error', 9, 23, 17, 15, 14, 5]
const temperatures1 = [6, 1, 12, 2, 13, 'error', -23, 5]

const calcAverageTemperature = (temp1, temp2) => {

    const arrayConcat = temp1.concat(temp2)

    let max = arrayConcat[0]
    let min = arrayConcat[0]

    for(let i = 0; i < arrayConcat.length; i++) {
        let curTemp = arrayConcat[i]

        if (typeof curTemp !== 'number' ) continue

        if (curTemp > max) max = curTemp

        if (curTemp < min) min = curTemp
    }

    return max - min
}

console.log(calcAverageTemperature(temperatures, temperatures1))

// const calcAmplitude = temperatures => {
//     let amplitude
    
//     const minValue = temperatures.reduce((prev, val) => {
//         let minVal
    
//         prev < val ? minVal = prev : minVal = val
    
//         if(val === 'error') minVal = prev
    
//         return minVal
//     }, 0);

//     const minVal = minValue;
    
    
//     const maxValue = temperatures.reduce((prev, val) => {
//         let maxVal
    
//         prev < val ? maxVal = val : maxVal = prev
    
//         if(val === 'error') maxVal = prev
    
//         return maxVal
//     }, 0);

//     const maxVal = maxValue

//     amplitude = maxVal - minVal

//     return amplitude
// }

// console.log(calcAmplitude(temperatures))