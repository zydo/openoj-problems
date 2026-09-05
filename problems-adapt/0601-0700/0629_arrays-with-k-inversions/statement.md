# Arrays With K Inversions

## Description

For an array `nums`, an inversion is a pair of positions `[i, j]` with
`0 <= i < j < nums.length` and `nums[i] > nums[j]` — an out-of-order pair
regardless of how far apart the positions are.

Given two integers `n` and `k`, count how many distinct permutations of
the numbers `1` through `n` contain exactly `k` inversions, and return
that count modulo `10⁹ + 7`.

### Example 1

```text
Input: n = 4, k = 2
Output: 5
```

### Example 2

```text
Input: n = 5, k = 3
Output: 15
```

### Example 3

```text
Input: n = 4, k = 0
Output: 1
```

### Constraints

- `1 <= n <= 1000`
- `0 <= k <= 1000`

## Hints

### Hint 1

Think about building a valid permutation of `1..m` by starting from a
valid permutation of `1..m-1` and inserting the new largest value `m`.

### Hint 2

Inserting `m` at any of its `m` possible positions only creates
inversions between `m` and the values to its right — it can never disturb
inversions already present among `1..m-1`.

### Hint 3

That gives a recurrence for the count with `j` inversions built from a
short contiguous range of the previous row's counts — a range that only
slides by one entry as `j` grows, so it can be maintained incrementally
instead of resummed from scratch.
