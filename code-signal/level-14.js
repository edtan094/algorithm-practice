function solution(a) {
  const answer = []
  let toggle = 1
  let team1 = 0
  let team2 = 0
  for (let i = 0; i < a.length; i++) {
    if (toggle === 1) {
      team1 += a[i]
      toggle = 2
    } else {
      team2 += a[i]
      toggle = 1
    }
  }
  answer.push(team1)
  answer.push(team2)
  return answer
}
