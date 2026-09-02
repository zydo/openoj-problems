# Squared Distinct Counts I

## Description

You are handed a 0-indexed integer array `nums`. Scan every subarray it
contains — a subarray being any contiguous, non-empty run of elements. For
each one, take the number of distinct values it holds, square that number,
and total these squares across the whole array.

Return that grand total.

### Example 1

```text
Input: nums = [1,2,3]
Output: 20
Explanation: The six subarrays score as follows:
[1], [2], [3] each hold one distinct value, contributing 1² each.
[1,2] and [2,3] each hold two, contributing 2² each.
[1,2,3] holds three, contributing 3².
The total is 1² + 1² + 1² + 2² + 2² + 3² = 20.
```

### Example 2

```text
Input: nums = [2,2,1]
Output: 12
Explanation: The six subarrays score as follows:
[2], [2], [1] contribute 1² each, and [2,2] still holds only one distinct
value, contributing 1².
[2,1] and [2,2,1] each hold two distinct values, contributing 2² each.
The total is 1² + 1² + 1² + 1² + 2² + 2² = 12.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`

## Hints

### Hint 1

Fix a left endpoint and extend the right endpoint one step at a time; a
running set of the values seen so far tells you the distinct count of every
subarray that starts at that left endpoint.
