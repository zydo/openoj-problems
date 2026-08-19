# Least Slack With K Resizes

## Description

A buffer is filled and drained over `n` moments. You are given an integer
array `nums`, where `nums[i]` is how many elements the buffer must hold at
moment `i`, and an integer `k` — the number of times you may change the
buffer's capacity, with the starting capacity chosen freely and free of
charge.

Whatever capacity `c_i` is in effect at moment `i` must satisfy
`c_i >= nums[i]`. The slack at moment `i` is `c_i - nums[i]`, and the total
slack is the sum of the slack over all `n` moments.

Return the smallest total slack achievable.

### Example 1

```text
Input: nums = [4,12,7], k = 0
Output: 13
Explanation: No resize is allowed, so one capacity serves all three moments;
the best is 12. The slack is (12 - 4) + (12 - 12) + (12 - 7) = 13.
```

### Example 2

```text
Input: nums = [5,40,6,7], k = 1
Output: 36
Explanation: Serve the first two moments with capacity 5, then resize to 40
for the last two. The slack is 0 + 0 + (40 - 6) + (40 - 7) = 67 — worse.
Better: keep capacity 40 for moments 0-1 and serve the tail with 7, giving
35 + 0 + 1 = 36, which is optimal.
```

### Example 3

```text
Input: nums = [15,25,10,20], k = 2
Output: 10
Explanation: Capacities 25, 25, 20, 20: the slack is 10 + 0 + 10 + 0 = 20 —
not optimal. Instead take 15 alone, 25 alone, then 20 for the last two
moments: every moment except the third is exactly full, and the slack is
20 - 10 = 10.
```

### Constraints

- `1 <= nums.length <= 200`
- `1 <= nums[i] <= 10⁶`
- `0 <= k <= nums.length - 1`

## Hints

### Hint 1

Suppose one capacity must serve the stretch of moments from `i` through `j`.
The cheapest valid choice is the largest demand in that stretch — smaller is
illegal at the peak moment, larger wastes more everywhere.

### Hint 2

With at most `k` resizes, the timeline cuts into at most `k + 1` stretches,
each on one capacity. That turns the task into choosing the cut points.

### Hint 3

Make the state `(moment, stretches used so far)` and let the transition try
every position for the next cut.
