// https://programmers.co.kr/learn/courses/30/lessons/12903

function solution(s) {
  const len = s.length;
  return len % 2 ? s[Math.floor(len / 2)] : s.slice((len / 2) - 1, (len / 2) + 1);
}

console.log(solution('abcdefgh'));
