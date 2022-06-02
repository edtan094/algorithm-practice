var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i] || target < nums[i]) {
      return i
    }
    if (target > nums[i] && target < nums[i + 1]) {
      return i + 1
    }
  }
  return nums.length
};
