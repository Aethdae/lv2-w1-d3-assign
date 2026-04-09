export function fibonacci(upperLimit) {
  const fibArr = [];
  let curr = 1;
  let prev = 0;
  while (curr < upperLimit) {
    fibArr.push(curr);
    curr = prev + curr;
    prev = curr - prev;
  }
  return fibArr;
}

export function add(x, y) {
  return x + y;
}

export function subtract(x, y) {
  return x - y;
}

export function clamp(num, min, max) {
  if (num < min) return min;
  if (num > max) return max;
  return num;
}
