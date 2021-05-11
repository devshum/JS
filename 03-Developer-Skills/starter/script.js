// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const measureKelvin = () => {
    const measurement = {
        type: 'temp',
        unit: 'celsius',

        // C) FIX
        value: Number(prompt('Degrees celsius:'))
    }


    // B) FIND
    console.log(measurement)
    // console.table(measurement)

    console.log(measurement.value)
    // console.warn(measurement.value)
    // console.error(measurement.value)

    const kelvin = measurement.value + 273
    return kelvin
}

// A) IDENTIFY A BUG 
console.log(measureKelvin())
