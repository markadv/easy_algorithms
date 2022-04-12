// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//recursion with generic memo
function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

function slowFib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

//recursion, with memo
// function fib(n, memo = {}) {
//   if (n in memo) return memo[n];
//   if (n < 2) return n;
//   memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
//   return memo[n];
// }

//for loop
// function fib(n) {
//   results = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     results.push(results[i - 1] + results[i - 2]);
//   }
//   return results[n];
// }

//recursive, no memo
// function fib(n) {
//   if (n < 2) return n;
//   return fib(n - 1) + fib(n - 2);
// }

module.exports = fib;
