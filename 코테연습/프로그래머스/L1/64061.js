// https://programmers.co.kr/learn/courses/30/lessons/64061


function solution(board, moves) {
  const basket = [];
  let result = 0;

  const stack = board.reduce((result, row) => row.map((_, i) => [...(result[i] || []), row[i]]))
  .map(row => row.reverse().filter(v => v !== 0));

  for (const move of moves) {
    const pop = stack[move - 1].pop();
    if (!pop) continue;
    if (pop === basket[basket.length -1]) {
      basket.pop();
      result += 2;
      continue;
    }
    basket.push(pop);
  }

  return result;
}


solution([
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1]
  ],
  [1, 5, 3, 5, 1, 2, 1, 4])
