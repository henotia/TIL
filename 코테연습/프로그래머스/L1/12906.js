// https://programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr) {
  return arr.reduce((acc, v) => {
    if (acc[acc.length -1] !== v) acc.push(v);
    return acc;
  }, []);
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
console.log(solution([4, 4, 4, 3, 3]));
