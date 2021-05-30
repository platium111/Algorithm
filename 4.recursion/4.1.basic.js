// definition | is a method that solve the small portion of problem until we solve the original problem

// basic
function recursiveFn(params) {
  // base case needed because if not, will run indefinitely -> will stop when reach the base case
  const stopPoint = 1;
  if (stopPoint === 1) {
    return true;
  }
  recursiveFn(params);
}

// 1.Normal way | factorial | is n!
//  example 5 * 4 * 3 * 2 * 1 -> start point is 1
function factorialFn(number) {
  if (number < 0) return NaN;
  let result = 1;
  for (let i = number; i > 1; i--) {
    result = result * i;
  }
  return result;
}

// 2.Recursive way
function factorialRecursive(number) {
  if (number === 0 || number === 1) return 1;
  return number * factorialRecursive(number - 1);
}

// 3. Fibonacci
// example: 0 1 1 2 3 5 8...
function fibonanciFn(n) {
  if (n === 0) return 0;
  if (n <= 2) return 1;
  return fibonanciFn(n - 1) + fibonanciFn(n - 2); //imagine now we take n at the end, so this n is created by n-1 and n-2
}

// 4. Momoization recursive
// if we see fibonanci(5) has 2 double times of fibinanci(3)
function fibonanciMemo(n, memo = []) {
  if (memo[n]) return memo[n];
  if (n === 0) return 0;
  if (n === 1) return 1;
  return (memo[n] = fibonanciMemo(n - 1, memo) + fibonanciMemo(n - 2, memo));
}

console.log(fibonanciMemo(9));
