'use strict';

const pointsDolphins = [44, 23, 71];
const pointsKoalas = [65, 54, 49];

const calcAverage = points => points.reduce((prev, point) => prev + point, 0) / 3;

const checkWinner = (pointsDolphins, pointsKoalas) => {

const avgDolphins = calcAverage(pointsDolphins);
const avgKoalas = calcAverage(pointsKoalas)

switch (true) {
  case avgDolphins >= avgKoalas * 2:
    return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;

  case avgKoalas >= avgDolphins * 2:
    return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;

  default:
    return `No team wins! (${avgKoalas} and ${avgDolphins})`;
  }
}

const result = checkWinner(pointsDolphins, pointsKoalas);
console.log(result);



