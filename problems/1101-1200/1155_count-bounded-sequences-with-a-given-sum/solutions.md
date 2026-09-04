# Solutions — Count Bounded Sequences With a Given Sum

## Rolling-Array Counting DP

Counting by building the sequence term by term beats enumerating outcomes.
Let `dp[t]` be the number of legal prefixes, among the terms already placed,
whose running sum is exactly `t`. Placing one more term adds some value `v`
between `1` and `k`, so the new count at `t` is the sum of the old counts at
`t - v` over every legal `v` — each value of the new term makes a distinct
sequence, which is why the values are summed, not deduplicated. The base
`dp[0] = 1` says the empty prefix reaches sum 0 in exactly one way.

The row is rebuilt once per term: for each of the `n` terms a fresh `ndp`
is filled with `ndp[t] = sum(dp[t - v] for 1 <= v <= min(k, t)) mod 1e9+7`.
The `min(k, t)` cap skips term values that would drive the running sum
negative, and the modulus applied on every write keeps the table entries
small. Writing into a separate row (rather than in place)
is what stops a term from feeding itself: the transition must read only the
previous term's distribution.

After `n` rounds, `dp[target]` holds the answer; sums no sequence can reach
— `target < n` or `target > n * k` — simply carry 0, their entries having
received no contributions. With `n` and `k` at most 30 and `target` at most
1000, the triple loop is a few hundred thousand additions. For
`n = 25, k = 12, target = 130` the table passes a trillion raw sequences and
returns `886166690`, the count modulo `10^9 + 7`.

**Complexity:** `O(n * k * target)` time, `O(target)` space.
