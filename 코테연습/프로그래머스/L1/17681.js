// https://programmers.co.kr/learn/courses/30/lessons/17681

function solution(n, arr1, arr2) {
  const result = [];
  for (let i = 0; i < n; i++) {
    const r = (arr1[i] | arr2[i]).toString(2)
    .replace(/[10]/g, v => +v ? '#' : ' ')
    .padStart(n, ' ');

    result.push(r);
  }

  return result;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
