# Counting Distinct Power Sums

## Description

You are given two positive integers `n` and `x`. Count the ways to write
`n` as a sum of `x`-th powers of distinct positive integers — that is,
the number of sets `{n1, n2, ..., nk}` of pairwise different positive
integers with

    n = n1^x + n2^x + ... + nk^x

For instance, with `n = 35` and `x = 2`, one qualifying set is
`{1, 3, 5}`, since `1^2 + 3^2 + 5^2 = 35`.

The count can be huge, so report it modulo `10^9 + 7`.

### Example 1

```text
Input: n = 6, x = 1
Output: 4
Explanation: With x = 1 the powers are the integers themselves, so we
count the sets of distinct integers summing to 6: {6}, {5, 1}, {4, 2},
and {3, 2, 1}. No other set works, giving 4.
```

### Example 2

```text
Input: n = 5, x = 2
Output: 1
Explanation: The squares at most 5 are 1 and 4, and the single subset
summing to 5 is {1, 2} — 1^2 + 2^2 = 5. The answer is 1.
```

### Example 3

```text
Input: n = 4, x = 3
Output: 0
Explanation: The only cube not exceeding 4 is 1^3 = 1, and a set may use
it at most once, so no set of distinct cubes can reach 4. The answer is
0.
```

### Constraints

- `1 <= n <= 300`
- `1 <= x <= 5`

### Hint 1

List every usable summand: the values `i^x` that do not exceed `n`. The
distinctness rule says each list entry may be taken at most once, so the
task is to count subsets of this fixed list that total `n`.

### Hint 2

Keep `dp[t]`, the number of subsets among the powers processed so far
that sum to `t`, seeded with `dp[0] = 1`. Fold in a power `p` with the
update `dp[t] += dp[t - p]`, sweeping `t` downward so `dp[t - p]` is
still the pre-`p` count and no subset takes `p` twice.
