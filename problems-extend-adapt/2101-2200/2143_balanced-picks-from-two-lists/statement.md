# Balanced Picks from Two Lists

## Description

You are given two integer lists `nums1` and `nums2`, both of length `n`.

For a span of positions `[l, r]` (inclusive, with `0 <= l <= r < n`),
imagine building two piles: at every index `i` in the span you take
exactly one of the two offered values — either `nums1[i]` into pile one
or `nums2[i]` into pile two. The span is called balanced when the two
piles end up with equal totals, where a pile that received nothing at all
counts as total `0`.

Two balanced spans count separately if their endpoints differ, or if
they cover the same positions but the picks disagree at even one index
(taking from the first list in one span and from the second list in the
other at the same position makes them different).

Count the balanced spans. The answer can be huge, so report it modulo
`10^9 + 7`.

### Example 1

```text
Input: nums1 = [1,1], nums2 = [1,1]
Output: 2
Explanation: No single position can balance — whichever value you take,
the other pile stays empty at a positive entry. The span [0, 1] works in
exactly two ways: take nums1[0] with nums2[1] (1 = 1), or take nums2[0]
with nums1[1] (1 = 1).
```

### Example 2

```text
Input: nums1 = [0,2], nums2 = [1,0]
Output: 3
Explanation: Span [0, 0] balances by taking the 0 from nums1 (0 = 0).
Span [1, 1] balances by taking the 0 from nums2 (0 = 0). Span [0, 1]
balances by taking 0 from nums1 at index 0 and 0 from nums2 at index 1,
so both piles total 0.
```

### Example 3

```text
Input: nums1 = [1], nums2 = [2]
Output: 0
Explanation: The only span is [0, 0], and either single pick leaves one
pile positive and the other empty — nothing balances.
```

### Constraints

- `n == nums1.length == nums2.length`
- `1 <= n <= 100`
- `0 <= nums1[i], nums2[i] <= 100`

## Hints

### Hint 1

Work span by span: if you already know every total that spans ending just
before an index can produce, extending those spans by one more position
only offers two new choices at that position.

### Hint 2

Track a single signed difference instead of two totals — taking from
`nums1` adds its value, taking from `nums2` subtracts its value, and a
span balances exactly when its difference hits zero.

### Hint 3

Keep a map from reachable difference to the number of ways it is reached,
refreshed once per right endpoint; each zero-difference entry you add is
a balanced span to count.
