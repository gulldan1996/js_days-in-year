'use strict';

function daysInYear(year) {
  try {
    if (!Number.isInteger(year) || !Number(year) > 0){
      throw new Error();
    }
    console.log(daysOnLeapYear(year) ? 366 : 365);
  } catch (error) {
      console.log('exception');
    }
}

function daysOnLeapYear(year) {
  return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

daysInYear(2019); // 365
daysInYear('2019'); // exception
daysInYear(2020); // 366
daysInYear(2020.2); // exception
daysInYear(2100); // 365
daysInYear({year: 2100}); // exception
