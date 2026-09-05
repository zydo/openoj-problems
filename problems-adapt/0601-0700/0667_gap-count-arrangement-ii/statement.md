# Gap Count Arrangement II

## Description

You are given two positive integers `n` and `k`. Build a list `answer`
holding a permutation of `1..n` — every integer from `1` to `n`, each used
exactly once — such that the sequence of adjacent absolute differences
`|answer[0] - answer[1]|, |answer[1] - answer[2]|, ..., |answer[n-2] -
answer[n-1]|` contains exactly `k` distinct values.

Return any permutation that satisfies the requirement.

This judge checks the returned list for exact equality, so it pins down one
canonical construction: spend the first `k + 1` slots zigzagging between the
low and high ends of `1..k + 1` — `1, k + 1, 2, k, 3, k - 1, ...` — which
produces the differences `k, k - 1, ..., 1` in that order, then lay out the
remaining values `k + 2..n` in ascending order. Both examples below already
follow that construction.

### Example 1

```text
Input: n = 5, k = 2
Output: [1,3,2,4,5]
Explanation: The head [1,3,2] zigzags across 1..3, giving differences
[2,1]. The tail [4,5] then climbs in order, adding only the difference 1,
which already appeared. The full difference list [2,1,2,1] has exactly 2
distinct values: 1 and 2.
```

### Example 2

```text
Input: n = 6, k = 5
Output: [1,6,2,5,3,4]
Explanation: With k = n - 1 there is no tail — the whole answer is the
zigzag across 1..6, and its differences [5,4,3,2,1] are already 5 distinct
values.
```

### Constraints

- `1 <= k < n <= 10⁴`
