// fibonacci sequence

/**
 * We all know that the fib sequence is best calculated using recursion.
 * and if remember right, oftyen when you write out the mathematical formular for the a recursive problem, you will see the recursion code in it staring at you.
 * so, fib formularf which is fib(n) = fib(n-1) + fib(n-2) is a recursive formular.
 */


function fib(n) {
  if (n === 2 || n === 1) return 1;

  return fib(n - 1) + fib(n - 2);
}

// function memoizedFib(n, map = {}) {

//   if (map[n] !== undefined) return map[n];
//   if (n <= 2) return 1;

//   map[n] = memoizedFib(n - 1, map) + memoizedFib(n - 2, map);

//   return map[n];

// }

// commented line

function cal(n) {
  return console.log(`the fibonacci sequeence of ${n} is : `, memoizedFib(n));
}


cal(5);
cal(7);
cal(43);
cal(47);
cal(2);