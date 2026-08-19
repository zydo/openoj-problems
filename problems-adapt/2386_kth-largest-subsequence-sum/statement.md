# Kth Largest Subsequence Sum

## Description

You are given an integer array `nums` and a positive integer `k`. Every
subsequence of `nums` has a sum — the total of the elements it keeps — and the
empty subsequence sums to `0`.

Among all `2^n` subsequence sums, counted with multiplicity (two different
subsequences may produce the same total), return the `k`th largest.

A subsequence keeps the array's order while dropping any elements you like.

### Example 1

```text
Input: nums = [3,-1,5], k = 5
Output: 3
Explanation: The eight subsequence sums, from largest to smallest, are
8, 7, 5, 4, 3, 2, 0, -1.
The 5th largest is 3.
```

### Example 2

```text
Input: nums = [7,2,9], k = 4
Output: 9
Explanation: The sums from largest to smallest are 18, 16, 11, 9, 9, 7, 2, 0.
Two different subsequences reach 9 — {7,2} and {9} — and both count, so the
4th largest is 9.
```

### Example 3

```text
Input: nums = [6,-3,1], k = 1
Output: 7
Explanation: The largest sum of all takes every positive element: 6 + 1 = 7.
```

### Constraints

- `n == nums.length`
- `1 <= n <= 10⁵`
- `-10⁹ <= nums[i] <= 10⁹`
- `1 <= k <= min(2000, 2ⁿ)`

## Hints

### Hint 1

The very best sum is easy to name. Could you walk downward from it, always
producing the next-best sum, until the `k`th one appears?

### Hint 2

Write each subsequence sum as the best sum minus something that was "lost".
What do the losses look like, sorted by size?
