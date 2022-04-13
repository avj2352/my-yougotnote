/**
 * memoization
 * js object, keys will be arg to fn, value will be return value
 * @param {*} n
 * @param {*} memo ?
 */
const fib = (n, memo = {}) => {
  // first check memo
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  // store in memo
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

console.log(fib(50));
