function solution(a, b) {
  const length = a.length
  const diff = [];
  for (let i = 0; i < length; i++) {
    if (a[i] !== b[i]) {
      diff.push(i);
    }
  }
  if (diff.length === 0) {
    return true
  }
  if (diff.length === 2) {
    if (a[diff[0]] === b[diff[1]] && a[diff[1]] === b[diff[0]]) {
      return true;
    }
  }
  return false
}
