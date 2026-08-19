# Solutions — Count Subsets Avoiding Difference k

## Chains by Difference k with Fibonacci Counting

The only forbidden configuration is two values exactly `k` apart, so values
interact solely along arithmetic progressions with step `k`. Sorting the
array makes the chains explicit: when scanning upward, a value `x` extends
the chain containing `x - k` if that predecessor exists, and opens a fresh
chain otherwise. Every forbidden pair lands inside one chain by
construction, so nothing is forbidden across chains, and the two kinds of
choice never interfere.

Within a chain listed in increasing order, an admissible subset is one that
never takes two chain-adjacent members — the independent sets of a path.
Skipping member `i` leaves `dp[i - 1]` options; taking it forces out its
predecessor and leaves `dp[i - 2]`, giving `dp[i] = dp[i - 1] + dp[i - 2]`,
a shifted Fibonacci number. The code runs it as a rolling pair seeded with
`1, 1`, so after `l` steps the running value is the chain's full count, the
empty selection included.

Take `nums = [4, 1, 7, 9]` with `k = 3`. The sorted values form the chain
`1, 4, 7` and the lone chain `9`. The first chain contributes the shifted
Fibonacci count `5` (`{}, {1}, {4}, {7}, {1,7}`), the second contributes
`2`, and the answer is their product `10`. When `k` exceeds every gap, as
with `[2, 6, 11]` and `k = 8`, all chains have length 1 and the product is
`2^n`.

The overall count starts at 1 — the empty subset of the whole array — and
sorting dominates the work; with `n <= 50` the product of Fibonacci numbers
fits comfortably in 64 bits.

**Complexity:** `O(n log n)` time, `O(n)` space.
