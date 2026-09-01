# Exactly-K Distinct Windows

## Description

Given an integer array `nums` and an integer `k`, count the contiguous
segments of `nums` that contain exactly `k` distinct values.

For instance, `[1,2,3,1,2]` spans the three distinct values `1`, `2`, and
`3`.

### Example 1

```text
Input: nums = [2,1,2,1,3,2], k = 2
Output: 8
Explanation: The segments holding exactly 2 distinct values are
[2,1], [2,1,2], [2,1,2,1], [1,2], [1,2,1], [2,1], [1,3], and [3,2].
```

### Example 2

```text
Input: nums = [1,2,3,1,2], k = 3
Output: 6
Explanation: The three distinct values appear together in [1,2,3],
[1,2,3,1], [1,2,3,1,2], [2,3,1], [2,3,1,2], and [3,1,2].
```

### Example 3

```text
Input: nums = [3,3,1,3], k = 1
Output: 5
Explanation: The four single-element segments qualify, plus [3,3].
```

### Constraints

- `1 <= nums.length <= 2 * 10⁴`
- `1 <= nums[i], k <= nums.length`

## Hints

### Hint 1

Checking every segment separately works but repeats the same counting
work over and over — the total number of segments is quadratic.

### Hint 2

Maintain a tally of how often each value occurs inside the current
window so the distinct count updates in constant time.

### Hint 3

Counting "at most k distinct" with two moving ends is easy; see what
subtracting the "at most k − 1" count from the "at most k" count leaves.
