/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const dictionary = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let total = 0
  let skip = false
  for (let i = 0; i < s.length; i++) {
    if (skip) {
      skip = false
      continue
    }
    else if (dictionary[s[i]] < dictionary[s[i + 1]]) {
      total -= dictionary[s[i]] - dictionary[s[i + 1]]
      skip = true
    } else {
      total += dictionary[s[i]]
    }

  }
  return total
};


// refactored code

const dictionary = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
};

var romanToInt = function (s) {
  let value = 0;
  for (let i = 0; i < s.length; i += 1) {
    dictionary[s[i]] < dictionary[s[i + 1]] ? value -= dictionary[s[i]] : value += dictionary[s[i]]
  }
  return value
};
