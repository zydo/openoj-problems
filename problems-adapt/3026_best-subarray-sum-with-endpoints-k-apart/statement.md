# Best Subarray Sum With Endpoints k Apart

## Description

You are given an integer array `nums` and a positive integer `k`.

Call a subarray `nums[i..j]` **k-apart** when the values sitting at its two
ends differ by exactly `k` in absolute value: `|nums[i] - nums[j]| == k`.

Return the largest sum over all k-apart subarrays. If the array has none,
return `0`.

### Example 1

```text
Input: nums = [3,1,4,1,5], k = 2
Output: 14
Explanation: The k-apart subarrays are [3,1] (|3-1| = 2, sum 4),
[3,1,4,1] (|3-1| = 2, sum 9), and [3,1,4,1,5] (|3-5| = 2, sum 14). The best
sum is 14.
```

### Example 2

```text
Input: nums = [-5,-2,-6,-4], k = 2
Output: -10
Explanation: Two subarrays qualify: [-2,-6,-4] with ends -2 and -4, sum -12,
and [-6,-4] with ends -6 and -4, sum -10. Every qualifying sum is negative,
and the largest of them is -10 — the answer is not forced to be positive.
```

### Example 3

```text
Input: nums = [7,7,7], k = 3
Output: 0
Explanation: Every pair of ends differs by 0, never 3, so no subarray is
k-apart and the result is 0.
```

### Constraints

- `2 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`
- `1 <= k <= 10^9`

## Hints

### Hint 1

The sum of `nums[i..j]` is a difference of two prefix sums. Fixing the right
end `j`, which left end gives the largest such difference?

### Hint 2

Only starts whose value equals `nums[j] - k` or `nums[j] + k` are eligible.
Sweep `j` left to right and remember, per value, the smallest prefix sum seen
before any start holding that value.

### Hint 3

Offer an element as a start only after it has been processed as an end — since
`k >= 1`, an element cannot pair with itself. And start the answer at "none",
not 0, because a qualifying subarray may have a negative sum.

### Hint 4

Both lookups at each `j` are hash hits, so the whole sweep is linear.
