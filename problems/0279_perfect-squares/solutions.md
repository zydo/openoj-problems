# Solutions — Perfect Squares

## Bottom-Up Dynamic Programming

Let `dp[i]` be the least number of perfect squares summing to `i`. Any decomposition of `i` uses some final square `s <= i`, and what remains is the subproblem `i - s` solved optimally, giving the recurrence `dp[i] = 1 + min(dp[i - s])` over all squares `s` not exceeding `i`. The base case `dp[0] = 0` (zero squares sum to zero) anchors the induction, and every state is reachable because 1 is a square, so no infeasible states exist.

The squares themselves are precomputed once — `i*i` for `i` up to `⌊√n⌋`, about a hundred candidates for n = 10⁴ — and the table is filled for `i = 1..n` in increasing order, so every `dp[i - s]` consulted is already final. The inner loop breaks as soon as `s > i`, and `float("inf")` sentinels simply lose every comparison until a real value overwrites them. `dp[n]` is the answer.

This is the tabulated form of the shortest-path view — n to 0 with edges subtracting any square — where BFS level-by-level would also work but the dp reuses overlapping subproblems explicitly. The cost is one pass over `n` states, each scanning up to `√n` squares, with the dp array as the dominant storage. Lagrange's four-square theorem guarantees the answer is at most 4, but the dp needs no such fact.

**Complexity:** `O(n·√n)` time, `O(n)` space.
