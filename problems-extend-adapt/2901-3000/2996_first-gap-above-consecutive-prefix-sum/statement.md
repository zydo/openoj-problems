# First Gap Above The Consecutive Prefix Sum

## Description

You are given a 0-indexed integer array `nums`.

Call a prefix `nums[0:i]` consecutive when every element after the first is
exactly one more than the element before it — `nums[j] == nums[j - 1] + 1`
for all `1 <= j <= i`. A prefix holding only `nums[0]` always counts.

From where that run of consecutive growth ends, take its sum as a starting
point and climb upward, skipping every integer the array contains, until an
integer is absent. Return that absent integer — the smallest one at or
above the longest consecutive prefix's sum.

### Example 1

```text
Input: nums = [4,5,6,10,3]
Output: 15
Explanation: The longest consecutive prefix is [4,5,6] and its sum is 15.
The value 15 itself appears nowhere in the array, so 15 is the answer.
```

### Example 2

```text
Input: nums = [2,3,7,4]
Output: 5
Explanation: The prefix grows only through [2,3] — 7 is not 4 — and that
prefix sums to 5. The array holds no 5, so 5 is returned.
```

### Example 3

```text
Input: nums = [1,1,2,3]
Output: 4
Explanation: The repeated 1 stops the run immediately, leaving the
one-element prefix [1] with sum 1. Climbing from 1: the array holds 1, 2,
and 3 but not 4, so 4 is the smallest absent integer at or above the sum.
```

### Constraints

- `1 <= nums.length <= 50`
- `1 <= nums[i] <= 50`

## Hints

### Hint 1

One left-to-right scan finds the longest consecutive prefix: keep stepping
while the current element is exactly the previous element plus one, and
stop at the first break.

### Hint 2

Drop the array's values into a set, start from the prefix's sum, and walk
upward — the first value the set does not contain is the answer.
