function solution(inputArray) {
  let length = 0
  const longestStrings = []
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > length) {
      length = inputArray[i].length
    }
  }
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length === length) {
      longestStrings.push(inputArray[i])
    }
  }
  return longestStrings;

}
