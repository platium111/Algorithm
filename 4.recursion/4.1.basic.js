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

// factorial | is n!
//  example 5 * 4 * 3 * 2 * 1 -> start point is 1
function factorialFn(number) {
  if (number < 0) return NaN;
  let result = 1;
  for (let i = number; i > 1; i--) {
    result = result * i;
  }
  return result;
}
