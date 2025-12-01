"use strict";

function flattenListofArrays(arr) {
  return arr.reduce(function (acc, current) {
    return acc.concat(current);
  });
}

const arrOfArrs = [
  ["aaron", "ake", "anna", "aje"],
  ["becky", "ben", "bright"],
  ["cara", "chris"],
  ["david", "daniel", "danielle", "djenue"],
];
console.log(flattenListofArrays(arrOfArrs));
