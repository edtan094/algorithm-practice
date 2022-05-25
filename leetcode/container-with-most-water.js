var maxArea = function (height) {
  let result = 0
  let i = 0
  let j = height.length - 1
  while (i < j) {
    const area = Math.min(height[i], height[j]) * (j - i)
    if (area > result) {
      result = area
    }
    if (height[i] > height[j]) {
      j--
    } else {
      i++
    }
  }
  return result
};
