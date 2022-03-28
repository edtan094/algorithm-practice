function solution(inputArray) {
  let product
  for (let i = 0; i < inputArray.length - 1; i++) {
    if (i === 0) {
      product = inputArray[i] * inputArray[i + 1]
    }
    if (i >= 1 && inputArray[i] * inputArray[i + 1] > product) {
      product = inputArray[i] * inputArray[i + 1]
    }
  }
  return product
}
