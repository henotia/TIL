// https://programmers.co.kr/learn/courses/30/lessons/67256

function solution(numbers, hand) {
  const result = [];
  const hands = {
    left: 10,   // *
    right: 12   // #
  };

  numbers.reduce((prev, curr) => {
    if (curr === 0) curr = 11;
    const v = curr % 3;
    if (v === 1) {
      // 왼쪽
      hands.left = curr;
      result.push('L');
    } else if (v === 0) {
      // 오른쪽
      hands.right = curr;
      result.push('R');
    } else if (v === 2) {
      // 센터
      const l = {
        x: hands.left % 3 - 1,
        y: hands.left / 3.1 | 0
      }
      const r = {
        x: hands.right % 3 === 0 ? hands.right % 3 + 2 : hands.right % 3 - 1,
        y: hands.right / 3.1 | 0
      }
      const c = {
        x: curr % 3 - 1,
        y: curr / 3.1 | 0
      }

      const lLength = Math.abs(l.x - c.x) + Math.abs(l.y - c.y);
      const rLength = Math.abs(r.x - c.x) + Math.abs(r.y - c.y);

      if (lLength > rLength) {
        hands.right = curr;
        result.push('R');
      } else if (lLength < rLength) {
        hands.left = curr;
        result.push('L');
      } else if (lLength === rLength) {
        hands[hand] = curr;
        result.push(hand.slice(0, 1));
      }
    }

    return curr;
  }, undefined);

  return result.map(v => v.toUpperCase()).join('');
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'); // LRLLLRLLRRL
solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left');  // LRLLRRLLLRR
solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right'); // LLRLLRLLRL
