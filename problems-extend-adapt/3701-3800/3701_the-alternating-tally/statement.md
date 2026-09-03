# The Alternating Tally

## Description

Read an array of integers left to right and keep a running tally: the first
element counts toward it, the second counts against it, the third counts
toward it again, and so on, with the sign flipping at every step. Formally,
the tally equals nums[0] - nums[1] + nums[2] - nums[3] + ..., continuing to
the end of the array. Return this final value.

### Example 1

```text
Input: nums = [10,4,25,8]
Output: 23
Explanation: The positions that add are 10 and 25, while the positions that
subtract are 4 and 8, so the tally is 10 - 4 + 25 - 8 = 23.
```

### Example 2

```text
Input: nums = [6,9,12,15,30]
Output: 24
Explanation: Adding the additions and subtracting the subtractions gives
6 - 9 + 12 - 15 + 30 = 24. The final element 30 sits on an adding position,
so nothing follows it to cancel.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`

## Hints

### Hint 1

One pass is enough: walk the array keeping a running total, and let the
index decide the sign — add on even indices, subtract on odd ones.
