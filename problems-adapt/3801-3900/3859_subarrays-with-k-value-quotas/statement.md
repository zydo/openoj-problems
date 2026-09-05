# Subarrays With k Value Quotas

## Description

You are given an integer array `nums` and two integers `k` and `m`.

Count the contiguous subarrays of `nums` that satisfy both of these rules
at once:

- exactly `k` distinct values occur in the subarray;
- each of those values occurs at least `m` times within it.

Return the number of qualifying subarrays.

### Example 1

```text
Input: nums = [4,4,3], k = 1, m = 1
Output: 4
Explanation: With k = 1 and no real frequency demand, the qualifying
subarrays are [4], [4], [3], and [4,4].
```

### Example 2

```text
Input: nums = [5,5,5,7], k = 1, m = 3
Output: 1
Explanation: Only [5,5,5] holds a single distinct value that reaches the
quota of 3; the lone 7 never does.
```

### Example 3

```text
Input: nums = [1,2,2,1,2], k = 2, m = 2
Output: 2
Explanation: [1,2,2,1] carries each of its two values exactly twice, and
[1,2,2,1,2] carries 1 twice and 2 three times.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`
- `1 <= k, m <= nums.length`

## Hints

### Hint 1

Fix the right end and ask where the left end may land: the answer is a
short interval of start positions, not a scan over all of them.

### Hint 2

Rank the distinct values by their latest occurrence. The start must come
after the `(k + 1)`st most recent one and no later than the `k`th most
recent one — and no later than the m-th most recent occurrence of each of
the top `k` values.

### Hint 3

A balanced tree over those latest-occurrence positions finds both boundary
positions in logarithmic time; sweep the right end and add up the interval
lengths.
