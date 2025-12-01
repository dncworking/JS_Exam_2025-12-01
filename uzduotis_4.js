"use strict";

function countChars(text) {
  let result = {
    letters: 0,
    digits: 0,
    spaces: 0,
    symbols: 0,
  };
  for (let char of text) {
    if (/[a-zA-Z]/.test(char)) {
      result.letters++;
    } else if (/[0-9]/.test(char)) {
      result.digits++;
    } else if (char === " ") {
      result.spaces++;
    } else {
      result.symbols++;
    }
  }
  return result;
}

const text = "Hello123! Welcome to JS 2025.";
console.log(countChars(text));
