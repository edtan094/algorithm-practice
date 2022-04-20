/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const sortedArray = nums.sort()
  for (let i = 0; i < sortedArray.length - 1; i++) {
    if (sortedArray[i] === sortedArray[i + 1]) {
      return true
    }
  }
  return false
};
