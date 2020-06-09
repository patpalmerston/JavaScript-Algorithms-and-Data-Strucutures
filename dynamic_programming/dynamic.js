// recursive solution to Fib
// recursion uses subproblems adding previous numbers to equal the next
function fib(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

console.log(fib(6));
