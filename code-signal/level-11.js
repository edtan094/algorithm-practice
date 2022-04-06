function solution(n) {
  n = String(n)
  n = Array.from(n)
  n = n.map(x => parseInt(x))
  let halfwayPoint = n.length / 2 - 1
  let firstHalf = 0
  let secondHalf = 0
  for (let i = 0; i < n.length; i++) {
    if (i <= halfwayPoint) {
      firstHalf += n[i]
    } else {
      secondHalf += n[i]
    }
  }
  if (firstHalf === secondHalf) {
    return true
  }
  return false
}
