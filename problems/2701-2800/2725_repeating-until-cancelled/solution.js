// Call fn once immediately, then keep one repeating timer for all later
// executions. The returned closure captures that timer handle so cancellation
// stops the entire repeat chain without affecting calls that already ran.
function repeatable(fn, args, t) {
    fn(...args);
    const intervalId = setInterval(() => {
        fn(...args);
    }, t);
    return () => clearInterval(intervalId);
}

class Solution {
    run(tickerCase) {
        tickerCase.drive(repeatable);
    }
}
