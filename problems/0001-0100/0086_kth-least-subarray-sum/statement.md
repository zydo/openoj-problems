# Kth Least Subarray Sum

## Description

An integer array `nums` of length `n` and an integer `k` are given. List
the sums of all non-empty contiguous runs of `nums` — there are
`n · (n + 1) / 2` of them, ties included — sort them ascending, and
return the entry at position `k` (1-indexed).

### Example 1

```text
Input: nums = [3,1,4], k = 4
Output: 4
Explanation: The runs and their sums:
- [3] → 3
- [1] → 1
- [4] → 4
- [3,1] → 4
- [1,4] → 5
- [3,1,4] → 8
Sorted, the sums read 1, 3, 4, 4, 5, 8; the 4th is 4.
```

### Example 2

```text
Input: nums = [2,2,5], k = 5
Output: 7
Explanation: The sums are 2, 2, 5, 4, 7, 9 for the runs [2], [2], [5],
[2,2], [2,5], [2,2,5]. Sorted: 2, 2, 4, 5, 7, 9 — the 5th is 7.
```

### Example 3

```text
Input: nums = [4,6], k = 3
Output: 10
Explanation: The sums are 4, 6, and 10, so the 3rd least is the whole
array's sum.
```

### Constraints

- `n == nums.length`
- `1 <= n <= 2 * 10^4`
- `1 <= nums[i] <= 5 * 10^4`
- `1 <= k <= n * (n + 1) / 2`

## Hints

### Hint 1

Write a counter first: for a value `x`, how many runs have sum at most
`x`? Every element being positive lets a sliding window answer in one
sweep.

### Hint 2

That count never decreases as `x` grows, so bisect for the least `x`
whose count reaches `k`.
