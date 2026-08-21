# Best k Disjoint Windows of Minimum Length m

## Description

You are given an integer array `nums` and two integers `k` and `m`.

Pick exactly `k` pairwise-disjoint contiguous windows in `nums`, each
covering `m` or more elements. A window's worth is the sum of the elements
it covers, and the worth of a selection is the sum over its windows.

Return the largest worth any legal selection reaches. Windows may sit
anywhere, elements between or around them simply go unused, and sums may be
negative — `k` windows are mandatory, wanted or not.

### Example 1

```text
Input: nums = [2,3,-4,5,6,-1,2], k = 2, m = 2
Output: 17
Explanation: Take [2, 3] for 5, and the stretch 5, 6, -1, 2 for 12 — the
second window swallows the -1 because the 2 after it is worth more than
the toll. Together: 5 + 12 = 17.
```

### Example 2

```text
Input: nums = [-8,4,-3,-6], k = 4, m = 1
Output: -13
Explanation: Four windows of at least one element each must cover four of
the four positions, so every element is counted once: -8 + 4 - 3 - 6 = -13.
```

### Example 3

```text
Input: nums = [5,-2,-2,5], k = 1, m = 3
Output: 6
Explanation: One window of at least three elements: cutting either end
throws away a 5, so the best window is the whole array, tolls included,
for 5 - 2 - 2 + 5 = 6.
```

### Constraints

- `1 <= nums.length <= 2000`
- `-10⁴ <= nums[i] <= 10⁴`
- `1 <= k <= floor(nums.length / m)`
- `1 <= m <= 3`

## Hints

### Hint 1

Layer the problem by window count: after fixing how many windows are
already placed, only the prefix consumed so far matters.

### Hint 2

Prefix sums turn any window's worth into one subtraction, so a window
closing at `j` and opening at `t` adds `prefix[j] - prefix[t]`.

### Hint 3

The opening point only needs to satisfy `t <= j - m`, and that allowance
grows with `j` — carry the best `dp[t] - prefix[t]` so far in a single
running maximum and each layer costs one pass.
