# Longest Chain Of Shrinking Gaps

## Description

You are given an integer array `nums`.

Pick a subsequence and read the absolute differences between each pair
of consecutive chosen elements. The pick counts as a valid chain when
those differences never grow — each one is greater than or equal to the
next. Formally, for a subsequence `seq0, seq1, ..., seqm` of `nums`,
`|seq1 - seq0| >= |seq2 - seq1| >= ... >= |seqm - seqm-1|` must hold.

Return the length of the longest valid chain.

### Example 1

```text
Input: nums = [50,40,50,30,40,20,25]
Output: 5
Explanation: The chain [50, 40, 30, 20, 25] has adjacent differences
[10, 10, 10, 5] — never growing. No chain of six exists.
```

### Example 2

```text
Input: nums = [8,8,8,3]
Output: 3
Explanation: The chain [8, 8, 8] has differences [0, 0]. Extending it
with the 3 would need a later gap of 5, which grows past 0.
```

### Example 3

```text
Input: nums = [100,10,5,1,60]
Output: 4
Explanation: The chain [100, 10, 5, 1] steps with differences
[90, 5, 4], each no larger than the one before.
```

### Constraints

- `2 <= nums.length <= 10⁴`
- `1 <= nums[i] <= 300`

## Hints

### Hint 1

Work dynamic-programming style: carry forward, for every value and every
gap size, the best chain that ends there having last jumped that far.

### Hint 2

A new element of value `v` can continue a chain that last jumped `d` by
landing from `v - d` or `v + d`; keep suffix maxima over `d` so each
lookup is constant time.
