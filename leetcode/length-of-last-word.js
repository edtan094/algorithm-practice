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
