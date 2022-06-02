/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let result = 0
  let temp = true
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      temp = false
    }
    if (temp) {
      result++
    }
    if (!temp && s[i] !== " ") {
      result = 1
      temp = true
    }
  }
  return result
};


// another cleaning looking solution
var lengthOfLastWord = function (s) {
  let newArr = s.split(" ")
  for (let i = newArr.length - 1; i >= 0; i--) {
    if (newArr[i]) {
      return newArr[i].length
    }
  }
};
