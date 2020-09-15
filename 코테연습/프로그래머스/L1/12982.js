// https://programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
  d.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < d.length; i++) {
    if (d[i] <= budget) {
      budget -= d[i]
      result.push(d[i]);
    }
  }

  return result.length;
}


solution([1, 3, 2, 5, 4], 9);
solution([2, 2, 3, 3], 10);
