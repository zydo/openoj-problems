# Largest Non-Decreasing-Offset Subsequence Sum

## Description

You are given an integer array `nums`, indexed from `0`.

Delete zero or more elements to leave a subsequence. The subsequence is
*admissible* when, walking its remaining elements left to right, each value
rises by at least as much as its position did: if `i` and `j` are
consecutive kept indices with `i < j`, then `nums[j] - nums[i] >= j - i`.

A subsequence of length 1 is admissible by default.

Return the largest possible sum of elements over all admissible
subsequences.

### Example 1

```text
Input: nums = [2,4,3,7,8]
Output: 21
Explanation: Keep indices 0, 1, 3, 4 — the values 2, 4, 7, 8. The gaps in
position (1, 2, 1) are matched or beaten by the rises in value (2, 3, 1).
Dropping index 2 is forced: value 3 sits one step after 4 but is smaller.
```

### Example 2

```text
Input: nums = [-3,4,-1,6]
Output: 10
Explanation: Keep indices 1 and 3: 6 - 4 = 2 >= 3 - 1 = 2, so 4 + 6 = 10
is admissible. Starting with -3 would drag the sum to 7, and -1 cannot
follow 4.
```

### Example 3

```text
Input: nums = [-7,-2,-9]
Output: -2
Explanation: All values are negative, so the best plan keeps a single
element, and the largest of them is -2. A length-1 choice needs no
inequality checks.
```

### Constraints

- `1 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`

## Hints

### Hint 1

Think DP: let `dp[x]` be the best admissible-subsequence sum among those
whose last kept index is exactly `x`. The final answer is the maximum
`dp[x]`.

### Hint 2

Move the indices across: `nums[j] - nums[i] >= j - i` is the same as
`nums[j] - j >= nums[i] - i`. An admissible subsequence is exactly one
whose *offsets* `nums[x] - x` never decrease.

### Hint 3

So `dp[x] = nums[x] + max(0, dp[y])` over earlier `y` with
`nums[y] - y <= nums[x] - x` — the `max(0, ·)` lets a negative run be
abandoned, since a lone element is always admissible.

### Hint 4

That is a prefix-maximum over compressed offset ranks, updated as `x`
advances — a Fenwick tree in its max flavor evaluates every step in
`O(log n)`.
