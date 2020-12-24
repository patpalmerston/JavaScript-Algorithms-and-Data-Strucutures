// recursive solution to Fib
// recursion uses subproblems adding previous numbers to equal the next
function fib(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

console.log(fib(6));

// solution with momization to optimize the repeated calls in fib recursion
// memoizaiton
function fib2(n, memo = []) {
    if (memo[n] !== undefined) return memo[n];
    if (n <= 2) return 1;
    let res = fib(n - 1, memo) + fib(n - 2, memo);
    memo[n] = res;
    return res;
}
console.log(fib2(10));
