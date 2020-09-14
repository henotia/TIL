// https://programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
  completion.map(player => {
    const idx = participant.findIndex(p => p === player);
    if (idx > -1) {
      participant.splice(idx, 1);
    }
  });

  return participant.toString();
}

solution(['leo', 'kiki', 'eden'], ['eden', 'kiki'])
solution(['marina', 'josipa', 'nikola', 'vinko', 'filipa'], ['josipa', 'filipa', 'marina', 'nikola'])
solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])
