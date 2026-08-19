/**
 * @param {number} n
 * @param {number[][]} segments
 * @return {number}
 */
var maxDisjointTotal = function (n, segments) {
    // Non-overlapping segments make this weighted interval scheduling on a
    // line. Bucket segments by end position — the bucket array itself provides
    // ordering by end position, so no sorting is needed.
    const byEnd = Array.from({ length: n }, () => []);
    for (const [start, end, gold] of segments) {
        byEnd[end].push([start, gold]);
    }
    // dp[e + 1]: best value from positions 0..e. Either position e stays unclaimed
    // (carry dp[e] forward) or some segment [start, e, value] is claimed on top
    // of the optimum strictly before its start — reading dp[start] is what
    // keeps overlapping segments from being combined.
    const dp = new Array(n + 1).fill(0);
    for (let end = 0; end < n; end++) {
        dp[end + 1] = dp[end];
        for (const [start, gold] of byEnd[end]) {
            const cand = dp[start] + gold;
            if (cand > dp[end + 1]) {
                dp[end + 1] = cand;
            }
        }
    }
    return dp[n];
};
