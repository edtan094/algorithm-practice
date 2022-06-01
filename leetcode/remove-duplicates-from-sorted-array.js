var removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return 0
  }
  let counter = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[counter] !== nums[i]) {
      counter++
      nums[counter] = nums[i]
    }
  }
  return counter + 1
};
