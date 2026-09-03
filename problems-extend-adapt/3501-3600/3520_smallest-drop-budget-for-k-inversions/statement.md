# Smallest Drop Budget For K Inversions

## Description

An integer array `nums` and an integer `k` are given.

Look at pairs of positions `(i, j)` with `i < j` whose values descend —
`nums[i] > nums[j]` — and call such a pair a drop. Given an allowance `x`,
a drop of size `nums[i] - nums[j]` counts when that size does not exceed
`x`.

What is the smallest allowance under which at least `k` drops count?
Return that allowance, or `-1` if no allowance, however generous, can
bring the count up to `k`.

### Example 1

```text
Input: nums = [5,3,8,2], k = 3
Output: 3
Explanation: Under an allowance of 3 the counting drops are (5,3), (5,2),
and (3,2). An allowance of 2 keeps only (5,3) and (3,2), which is short
of k = 3.
```

### Example 2

```text
Input: nums = [4,7,1,9,2], k = 5
Output: 7
Explanation: The array holds exactly five drops: (4,1) of size 3, (4,2)
of size 2, (7,1) of size 6, (7,2) of size 5, and (9,2) of size 7. Only an
allowance of 7 — the largest drop size — makes all five count.
```

### Example 3

```text
Input: nums = [2,4,6,8], k = 1
Output: -1
Explanation: The values only ascend, so no pair of positions is a drop
under any allowance.
```

### Constraints

- `1 <= nums.length <= 10⁴`
- `1 <= nums[i] <= 10⁹`
- `1 <= k <= 10⁹`

## Hints

### Hint 1

Raising the allowance can only grow the count, never shrink it — exactly
the monotonicity a binary search over the allowance needs.

### Hint 2

To count the drops under an allowance `x`, sweep the array with a Fenwick
tree over compressed values: for each element, add how many earlier
elements fall inside the value window `(v, v + x]`.

### Hint 3

First compare `k` against the count at the largest conceivable allowance —
the plain inversion total. If even that falls short, or the array is
constant and has no drops at all, the answer is `-1`.
