// https://programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
  return commands.map(([start, end, pick]) => array.slice(start - 1, end).sort((a, b) => a - b)[pick - 1]);
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));
console.log(solution([1, 5, 2, 6, 3, 7, 4, 8, 5, 432, 2, 4, 142], [[2, 5, 3], [1, 13, 4], [1, 7, 3]]));
