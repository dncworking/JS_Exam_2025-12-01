"use strict";

function transformUsernames(usernames) {
  return usernames.map(function (name) {
    return {
      origin: name,
      lower: name.toLowerCase(),
      length: name.lenght,
      hasNumber: /\d/.test(name),
    };
  });
}
const usernames = ["alice_01", "Bob99", "charlie_dev", "DANA", "eve-test"];
console.log(transformUsernames(usernames));
