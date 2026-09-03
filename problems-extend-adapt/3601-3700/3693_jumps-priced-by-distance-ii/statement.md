# Jumps Priced By Distance II

## Description

You are working your way up a staircase of `n + 1` steps numbered `0`
through `n`. You begin on step `0` without having spent anything. A
1-indexed array `costs` of length `n` is also given: `costs[i]` is the
fee attached to step `i`.

From your current step `i` the next move lands you on step `i + 1`,
`i + 2`, or `i + 3`. Landing on step `j` from step `i` charges you
`costs[j] + (j - i)²` — the landing fee plus the square of how far you
jumped.

Return the cheapest possible total for reaching step `n`.

### Example 1

```text
Input: n = 5, costs = [2,3,4,5,6]
Output: 21
Explanation: One cheapest route is 0 -> 1 -> 3 -> 5. The jumps cost
costs[1] + 1² = 3, then costs[3] + 2² = 8, then costs[5] + 2² = 10, and
3 + 8 + 10 = 21.
```

### Example 2

```text
Input: n = 1, costs = [7]
Output: 8
Explanation: The only move is 0 -> 1, charging costs[1] + 1² = 7 + 1 = 8.
```

### Example 3

```text
Input: n = 2, costs = [10,1]
Output: 5
Explanation: Hopping straight to the top with 0 -> 2 pays
costs[2] + 2² = 1 + 4 = 5, skipping the expensive middle step entirely.
```

### Example 4

```text
Input: n = 6, costs = [1,100,1,100,1,100]
Output: 113
Explanation: Walk the cheap steps one at a time — 0 -> 1 -> 3 -> 5 costs
2 + 5 + 5 — then pay the final toll 100 + 1 to land on step 6, for
113 in total.
```

### Constraints

- `1 <= n == costs.length <= 10^5`
- `1 <= costs[i] <= 10^4`

## Hints

### Hint 1

Think dynamic programming: let `dp[j]` be the least money you can be
standing on step `j` with.

### Hint 2

Since a jump covers at most three steps, step `j` is only reachable from
`j - 1`, `j - 2`, or `j - 3` — the recurrence never looks further back
than that.

### Hint 3

Each step takes `dp[j] = min(dp[j - d] + costs[j] + d²)` over
`d` in `1..3`, seeded with `dp[0] = 0`; the answer is `dp[n]`.
