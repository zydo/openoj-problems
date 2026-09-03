# Windows That Contain Their Sum

## Description

You are given an integer array `nums`.

A subarray of `nums` is self-summing when the total of its elements equals
at least one element that lies inside that same subarray.

Return how many subarrays of `nums` are self-summing.

### Example 1

```text
Input: nums = [2,-2,6,1]
Output: 5
Explanation: The one-element subarrays [2], [-2], [6], and [1] all
qualify, since each window's total is its only element. The window
[2, -2, 6] also qualifies: its total is 6, and 6 is one of its own
elements. Every other window's total falls outside its values, so the
answer is 5.
```

### Example 2

```text
Input: nums = [3,-1,4]
Output: 3
Explanation: Each single-element subarray ([3], [-1], [4]) qualifies.
No longer window works: [3, -1] totals 2, [-1, 4] totals 3, and
[3, -1, 4] totals 6, none of which sits inside the window in question.
The answer is 3.
```

### Example 3

```text
Input: nums = [5]
Output: 1
Explanation: The only subarray is [5] itself, and its total of 5 is
present within it.
```

### Constraints

- `1 <= nums.length <= 500`
- `-10⁵ <= nums[i] <= 10⁵`

## Hints

### Hint 1

Enumerate every subarray from a fixed left end, growing the right end one
step at a time; keep the running total and a counter of the values the
window currently holds, and the membership test becomes a single lookup.
