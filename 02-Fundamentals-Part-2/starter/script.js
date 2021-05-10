'use strict'

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

let sum;
let tips = []
let totals = []
let newTotals

const calcTip = bill => bill >= 50 && bill <= 300 ? Math.ceil(bill * .15) : Math.ceil(bill * .2)

bills.forEach(bill => {
  const tip = calcTip(bill)
  const total = tip + bill


  tips.push(tip)
  totals.push(total)

  newTotals = Math.ceil(totals.reduce((next, prev) => next + prev, 0) / totals.length)


  // switch (true) {
  //   case bill >= 50 && bill <= 300:
  //     tip = Math.ceil(bill * .15)
  //     total = bill + tip
  //     tips.push(tip)
  //     totals.push(total)
  //   default:
  //     tip = Math.ceil(bill * .2)
  //     total = bill + tip
  //     tips.push(tip)
  //     totals.push(total)
  // };
})

// for(let i = 0; i < totals.length; i++) {
//   let totalsAverage
//   sum = sum + totals[i]
//   totalsAverage = sum
//   newTotals = Math.ceil(totalsAverage / totals.length)
// }

// for(let i = 0; i < bills.length; i++) {
//   let tip
//   let total

//   switch (true) {
//     case bills[i] >= 50 && bills[i] <= 300:
//       tip = Math.ceil(bills[i] * .15)
//       total = bills[i] + tip
//       tips.push(tip)
//       totals.push(total)
//     default:
//       tip = Math.ceil(bills[i] * .2)
//       total = bills[i] + tip
//       tips.push(tip)
//       totals.push(total)
//   };
// }

console.log(tips)
console.log(totals)
console.log(newTotals)
