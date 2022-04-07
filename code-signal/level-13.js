function solution(inputString) {
  stack = ['']

  for (i of inputString)
    if (i == ')')
      stack[stack.length - 2] += [...stack.pop()].reverse().join('')

    else if (i == '(')
      stack.push('')

    else stack[stack.length - 1] += i

  return stack[0]
}
