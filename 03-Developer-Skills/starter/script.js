// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const values = [17, 21, 23]
const values1 = [12, 5, -5, 0, 4]

const printForecast = values => {
    let newArr = values.map((value, i) => `${value}°C in ${i + 1} days`)

   return `... ${newArr.join(' ... ')} ...`

}   

console.log(printForecast(values));
console.log(printForecast(values1));




