# Count Sequences With K Immediate Repeats

## Description

You are given three integers `n`, `m`, and `k`.

Position `i` of a length-`n` sequence is an *immediate repeat* when
`1 <= i < n` and the entry at `i` equals the entry just before it. Count the
sequences `arr` of length `n` such that:

- every entry of `arr` lies in the range `[1, m]`, and
- exactly `k` positions of `arr` are immediate repeats.

Return the count modulo `10⁹ + 7`.

### Example 1

```text
Input: n = 3, m = 2, k = 2
Output: 2
Explanation: Both positions after the first must repeat, so every entry
matches: the sequences are [1, 1, 1] and [2, 2, 2].
```

### Example 2

```text
Input: n = 4, m = 2, k = 1
Output: 6
Explanation: The sequences are [1, 1, 2, 1], [1, 2, 1, 1], [1, 2, 2, 1],
[2, 1, 1, 2], [2, 1, 2, 2], and [2, 2, 1, 2] — one repeat somewhere among the
three later positions, and a change of value at each of the other two.
```

### Example 3

```text
Input: n = 4, m = 3, k = 0
Output: 24
Explanation: No entry may equal the one before it. The first entry has 3
options and each of the other three has 2, giving 3 · 2 · 2 · 2 = 24.
```

### Constraints

- `1 <= n <= 10⁵`
- `1 <= m <= 10⁵`
- `0 <= k <= n - 1`

## Hints

### Hint 1

Nothing constrains the first entry — it has `m` options — and every later
entry is defined by a single comparison with its predecessor.

### Hint 2

Each of the `n - 1` later entries is either a copy of the one before it (1
option) or a different value (`m - 1` options). Choosing *which* `k` of them
are the copies fixes everything else.

### Hint 3

Two positions with the same role are interchangeable, so a binomial
coefficient counts the placements — then multiply the three factors and
reduce.
