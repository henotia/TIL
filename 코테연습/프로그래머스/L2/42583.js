// https://programmers.co.kr/learn/courses/30/lessons/42583

function solution(bridge_length, weight, truck_weights) {
  const across = [];
  let totalWeight = 0;

  for (let tick = 1; ; tick++) {
    if (across[tick]) {
      totalWeight -= across[tick];
    }

    if (totalWeight >= weight) { continue; }
    if (truck_weights[0] + totalWeight <= weight) {
      const truck = truck_weights.shift();
      across[tick + bridge_length] = truck;
      totalWeight += truck;
    }

    if (truck_weights.length === 0 && totalWeight === 0) {
      return tick;
    }
  }
}

console.time('1')
console.log(solution(10000, 10000, new Array(1000).fill(10)));
console.timeEnd('1')
// console.log(solution(100, 100, [10]));
