// https://programmers.co.kr/learn/courses/30/lessons/62048

function solution(w, h) {
  const result = gcd(w, h);
  return (w * h) - (w + h - result);
}

function gcd(w, h) {
  [w, h] = [Math.max(w, h), Math.min(w, h)];
  return w % h === 0 ? h : gcd(w % h, h);
}

/*
1. 가로 세로의 최대 공약수를 구해 w * h 를 w` * h`로 축소해서 계산할 수 있음
2. w` * h`로 축소된 사각형을 바탕으로, 대각선을 그으면
3. 시작 모서리부터 시작하므로 시작지점의 1개의 사각형이 잘리며
4. 끝 모서리까지 w` - 1개의 가로선과 h` - 1 개의 세로선을 지나며 자름
5. 식으로 표현하면 1 + (w` - 1) + (h` - 1) 이므로 w` + h` - 1개 만큼의 잘린 사각형이 생김
6. 축소시키기 위해 나눈 공약수를 곱해주면 w + h - gcd(w, h) 만큼 나옴
7. 전체 (w * h) 에서 잘린 (w + h - gcd(w, h)) 사각형을 빼주면 된다.
 */

solution(8, 12);
solution(9,9);
solution(5,6);
