/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  if (x < 0) {
    return false
  }
  x = x.toString()
  let reversedX = x.split("").reverse().join("")
  if (x === reversedX) {
    return true
  } else {
    return false
  }
};
