# Distinct Pair Midpoints

## Description

You are given an integer array `nums` of even length.

Repeat the following until `nums` is empty:

- Remove the smallest number currently in `nums`.
- Remove the largest number currently in `nums`.
- Record the midpoint of the two removed numbers, defined as the average
  `(a + b) / 2` of the pair.

Return how many distinct midpoint values are recorded across the whole
process. When several elements tie for the smallest (or largest) value,
any of them may be removed.

### Example 1

```text
Input: nums = [8,1,3,6]
Output: 1
Explanation: Remove 1 and 8 to record (1 + 8) / 2 = 4.5, then remove 3
and 6 to record (3 + 6) / 2 = 4.5. Both recordings are 4.5, so only one
distinct value is seen.
```

### Example 2

```text
Input: nums = [2,9,4,3]
Output: 2
Explanation: The pairs removed are (2, 9) and (3, 4), recording 5.5 and
3.5 respectively — two distinct values.
```

### Example 3

```text
Input: nums = [10,1,7,4,9,5]
Output: 3
Explanation: The removed pairs are (1, 10), (4, 9), and (5, 7), recording
5.5, 6.5, and 6 — three distinct values.
```

### Constraints

- `2 <= nums.length <= 100`
- `nums.length` is even.
- `0 <= nums[i] <= 100`

## Hints

### Hint 1

After sorting, the smallest element is always paired with the largest, the
second smallest with the second largest, and so on.

### Hint 2

Two midpoints are equal exactly when their pair sums are equal, since
dividing by two is a one-to-one map — count distinct pair sums instead of
dealing with fractional values.
