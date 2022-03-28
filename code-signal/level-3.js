function solution(inputString) {
let reversedString = ""
for (let i = inputString.length - 1; i >= 0; i--){
    reversedString += inputString[i]
}
if (inputString === reversedString){
    return true
} else{
    return false
  }
}
