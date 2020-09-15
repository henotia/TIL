// https://programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
  const r = new Array(N);
  for (let i = 1; i < N + 1; i++) {
    const blocked = stages.filter(v => v === i);
    const solved = stages.filter(v => v >= i);
    r[i - 1] = {
      idx: i,
      b: blocked.length / solved.length
    };
  }

  r.sort((a, b) => b.b - a.b);

  return r.map(v => v.idx);
}


solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
solution(4, [4, 4, 4, 4, 4])
