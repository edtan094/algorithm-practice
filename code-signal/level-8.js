function solution(a) {
  const answer = []
  const treePositions = []
  const peoplesHeight = []
  let peoplesCounter = 0
  for (let i = 0; i < a.length; i++) {
    if (a[i] === -1) {
      treePositions.push(i)
    } else {
      peoplesHeight.push(a[i])
    }
  }
  peoplesHeight.sort((a, b) => a - b)
  for (let i = 0; i < a.length; i++) {
    if (i === treePositions[0]) {
      answer.push(-1)
      treePositions.shift()
    } else {
      answer.push(peoplesHeight[peoplesCounter])
      peoplesCounter++
    }
  }
  return answer
}

function solutionRefactored(a){
  var s = a.filter(h => h > 0).sort((a, b) => a - b)
  return a.map(p => {
    if (p !== -1) {
      return s.shift();
    }

    return -1;
  })
}
