// https://programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
  const p1 = [1, 2, 3, 4, 5];
  const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let a1 = 0, a2 = 0, a3 = 0;

  const p1l = p1.length;
  const p2l = p2.length;
  const p3l = p3.length;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === p1[i % p1l]) a1++;
    if (answers[i] === p2[i % p2l]) a2++;
    if (answers[i] === p3[i % p3l]) a3++;
  }

  const result = [];
  const m = Math.max(a1, a2, a3);

  if (a1 === m) result.push(1);
  if (a2 === m) result.push(2);
  if (a3 === m) result.push(3);

  return result;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));
console.log(solution([1, 3, 4, 2, 5, 1, 5, 1, 3, 4, 5, 1, 3, 2, 1, 5, 4, 2, 3, 1, 2, 4, 5, 1, 2, 3, 2, 5, 4, 1, 3, 2, 1, 5, 4, 2, 3, 1, 5]));
