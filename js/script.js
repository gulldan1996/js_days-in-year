'use strict';

function daysInYear(year) {
  try {
    if (!Number.isInteger(year) || !Number(year) > 0){
      throw new Error('exception');
    }

    const firstDay = new Date(year, 0, 1);
    const lastDay = new Date(year, 11, 31, 23, 59, 59);
    const msInDay = 1000 * 60 * 60 * 24;
    const msInYear = lastDay - firstDay;
    return Math.ceil(msInYear / msInDay);
  } catch (error) {
      return error.message;
    }
}

console.log(daysInYear(2019)); // 365
console.log(daysInYear('2019')); // exception
console.log(daysInYear(2020)); // 366
console.log(daysInYear(2020.2)); // exception
console.log(daysInYear(2100)); // 365
console.log(daysInYear({year: 2100})); // exception
