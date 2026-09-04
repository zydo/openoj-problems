# Longest K-Switch Subsequence I

## Description

You are given an integer array `nums` and a non-negative integer `k`.

Call a sequence of integers `seq` k-switching when at most `k` of the
positions `i` in `[0, seq.length - 2]` satisfy `seq[i] != seq[i + 1]` — in
other words, consecutive entries may change value at most `k` times.

Return the length of the longest k-switching subsequence of `nums`.

### Example 1

```text
Input: nums = [3,1,4,1,5,9,2,6], k = 2
Output: 4
Explanation: The subsequence [1,1,5,9] changes value twice (1 to 5, then
5 to 9), which fits the budget of k = 2 switches, and no k-switching
subsequence is longer.
```

### Example 2

```text
Input: nums = [2,2,2,7,7], k = 0
Output: 3
Explanation: With zero switches allowed every chosen element must be equal,
and the longest run of equal values is [2,2,2].
```

### Example 3

```text
Input: nums = [6,5,4,3], k = 3
Output: 4
Explanation: Every adjacent pair of the whole array differs, so all four
elements cost exactly the three switches the budget permits.
```

### Constraints

- `1 <= nums.length <= 500`
- `1 <= nums[i] <= 10⁹`
- `0 <= k <= min(nums.length, 25)`

## Hints

### Hint 1

The actual magnitudes in `nums` are irrelevant — only equality matters — so
the values could just as well be relabeled `0` through `n - 1`.

### Hint 2

Let `dp[a][v]` be the length of the longest k-switching subsequence found so
far that has used `a` switches and ends with value `v`.

### Hint 3

Sweeping left to right, each element either extends a subsequence that
already ends with its own value — costing no switch — or appends after the
best subsequence with one fewer switch spent, i.e.
`dp[a][v] = max(dp[a][v] + 1, dp[a - 1][best over other values] + 1)`.
