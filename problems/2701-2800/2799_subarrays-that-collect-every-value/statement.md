# Subarrays That Collect Every Value

## Description

You are given an array `nums` of positive integers.

Call a subarray of it collecting when it contains every distinct value
that appears anywhere in `nums` — that is, the number of distinct values
inside the subarray equals the number of distinct values in the whole
array.

Count the collecting subarrays.

A subarray is a non-empty run of consecutive elements.

### Example 1

```text
Input: nums = [2,1,2,3,1]
Output: 5
Explanation: The array holds the distinct values 1, 2 and 3, and
exactly five subarrays contain all three: [2,1,2,3], [2,1,2,3,1],
[1,2,3], [1,2,3,1] and [2,3,1].
```

### Example 2

```text
Input: nums = [7,7,1]
Output: 2
Explanation: The distinct values are 7 and 1. Only the subarrays
[7,1] and [7,7,1] contain both of them.
```

### Example 3

```text
Input: nums = [1,2,1,2,3]
Output: 3
Explanation: The distinct values are 1, 2 and 3. The three subarrays
[1,2,1,2,3], [2,1,2,3] and [1,2,3] are the ones that hold all of them.
```

### Constraints

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 2000`

## Hints

### Hint 1

Let `k` be the number of distinct values in the whole array; the task
is then to count the subarrays holding exactly `k` distinct values.

### Hint 2

Counting subarrays with _at most_ `m` distinct values is easy to sweep
with a sliding window, and "exactly `k`" drops out as
`atMost(k) − atMost(k − 1)`.
