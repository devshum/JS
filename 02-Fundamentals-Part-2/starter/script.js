'use strict';

const bills = [125, 555, 44];

const calcTip = bills => {
  const billsArr = bills;

  const tipsArr = bills.map(bill => {
    switch (true) {
      case bill >= 50 && bill <= 300:
        return Math.ceil(bill * .15)
      default:
        return Math.ceil(bill * .2);
    };
  });

  const billsAndTipsArr = billsArr.map((bill, i) => bill + tipsArr[i]);

  return {
    billsPlusTips: billsAndTipsArr, // [144, 666, 53]
    bills: billsArr, // [125, 555, 44]
    tips: tipsArr  // [19, 111, 9]
  };
};

const result = calcTip(bills);