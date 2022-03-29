function solution(n) {
  var answer = 1
  for (let i = 1; i <= n; i++) {
    if (n === 1) {
      return answer
    }
    answer += (4 * (i - 1))
  }
  return answer
}
