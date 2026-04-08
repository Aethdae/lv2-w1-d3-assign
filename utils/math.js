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
