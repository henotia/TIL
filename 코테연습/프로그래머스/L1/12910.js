// https://programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
  const result = arr.filter(v => !(v % divisor)).sort((a, b) => a - b);
  return result.length ? result : [-1];
}

console.log(solution([5, 9, 7, 10], 5));
console.log(solution([3, 2, 6], 10));

