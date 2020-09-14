// https://programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
  const player = {};
  participant.forEach(p => player[p] ? player[p]++ : player[p] = 1);
  completion.forEach(p => player[p] ? player[p]-- : undefined);

  return Object.entries(player).find(([_, v]) => v === 1)[0];
}

solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']).log
solution(['marina', 'josipa', 'nikola', 'vinko', 'filipa'], ['josipa', 'filipa', 'marina', 'nikola'])
solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])
