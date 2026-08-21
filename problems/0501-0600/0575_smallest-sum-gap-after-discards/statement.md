# Smallest Sum Gap After Discards

## Description

You are given a 0-indexed integer array `nums` holding `3 * n` elements.

You must throw away exactly `n` of them — any `n` you like. What is left,
`2 * n` elements in their original order, is cut in half: the first `n`
surviving elements form the front part with sum `front`, the last `n` form
the back part with sum `back`.

The score of an arrangement is `front - back`, which may be negative. Return
the smallest score achievable.

### Example 1

```text
Input: nums = [4,2,6]
Output: -4
Explanation: With 3 elements, n = 1, so one element goes and the other two
become the parts. Discarding 4 leaves [2,6] scoring 2 - 6 = -4; discarding 2
leaves [4,6] scoring -2; discarding 6 leaves [4,2] scoring 2. -4 wins.
```

### Example 2

```text
Input: nums = [6,8,4,7,2,5]
Output: -2
Explanation: Now n = 2. Discard 8 and 2; the survivors [6,4,7,5] split into
[6,4] and [7,5], scoring 10 - 12 = -2. No other pair of discards does
better.
```

### Example 3

```text
Input: nums = [2,9,4,9,2,9]
Output: -12
Explanation: Discard the leading 9 and the middle 2. The front [2,4] sums to
6 against the back [9,9] at 18 — repeated values make the back rich in nines
while the front keeps the two smallest early values.
```

### Constraints

- `nums.length == 3 * n`
- `1 <= n <= 10⁵`
- `1 <= nums[i] <= 10⁵`

## Hints

### Hint 1

A small `front - back` wants the front part cheap and the back part rich.
From which stretch of the original array can each part possibly draw its
members?

### Hint 2

For every prefix, what is the least that `n` chosen elements from it can
sum to — and which bounded container maintains that as the prefix grows?

### Hint 3

Mirror the question on suffixes: the most that `n` chosen elements from each
suffix can sum to.

### Hint 4

The two parts never overlap: some boundary index separates them. Try every
legal boundary and pair the prefix minimum with the suffix maximum across it.
