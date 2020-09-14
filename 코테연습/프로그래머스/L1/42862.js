function solution(n, lost, reserve) {
  const students = new Array(n).fill(true);
  lost = lost.map(v => v - 1).sort((a, b) => a - b);
  lost.forEach(i => students[i] = false);

  reserve = reserve.map(v => v - 1).sort((a, b) => a - b);

  const d = [];
  for (const i of reserve) {
    if (!students[i]) {
      students[i] = true;
      d.push(i);
    }
  }

  for (let i = 0 ; i < d.length; i++) {
    const idx = reserve.findIndex(v => v === d[i]);
    if (idx > -1) reserve.splice(idx, 1);
  }

  for (const i of reserve) {
  if (!students[i - 1] && i - 1 >= 0) {
      students[i - 1] = true;
    } else if (!students[i + 1] && i < students.length - 1) {
      students[i + 1] = true;
    }
  }

  return students.filter(v => v).length;
}
console.log(solution(5, [3, 4, 5], [2, 3, 4]));
console.log(solution(11, [1, 3, 2, 5], [1, 2, 5, 7, 9]));
// console.log(solution(5, [2, 4], [3]));
// console.log(solution(3, [3], [1]));
// console.log(solution(10, [7, 1, 5, 4], [6, 9]));
// console.log(solution(10, [1, 2], [2, 3]));
// console.log(solution(3, [1, 2], [2, 3]));
