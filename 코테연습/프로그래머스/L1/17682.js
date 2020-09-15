// https://programmers.co.kr/learn/courses/30/lessons/17682

function solution(dartResult) {
  const reg = /(\d+)([SDT])([*#]?)/g;
  const matches = dartResult.matchAll(reg);

  let result = [];
  let idx = 0;
  const point = {S: 1, D: 2, T: 3}

  for (let match of matches) {
    const [v, p, o] = [match[1], match[2], match[3]];

    let r = Math.pow(v, point[p]);

    if (o === '*') {
      if (idx > 0) {
        result[idx - 1] = result[idx - 1] * 2;
      }
      r *= 2;
    } else if (o === '#') {
      r = -r;
    }

    idx++;
    result.push(r);
  }

  return result.reduce((p, c) => p + c);
}

console.log(solution("1S2D*3T"));    // 37
console.log(solution("1D2S#10S"));   // 9
console.log(solution("1D2S0T"));     // 3
console.log(solution("1S*2T*3S"));   // 23
