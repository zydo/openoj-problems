# Longest Run With Bounded Spread

## Description

You are given an integer array `nums` and an integer `limit`.

Find the longest non-empty run of consecutive positions of `nums` in which no
two values differ by more than `limit`, and return its length.

### Example 1

```text
Input: nums = [4,7,2,5], limit = 5
Output: 4
Explanation: The whole array qualifies: its smallest value is 2 and its
largest is 7, and 7 - 2 = 5 <= 5.
```

### Example 2

```text
Input: nums = [20,31,32,30,34,5,6], limit = 4
Output: 4
Explanation: The run [31,32,30,34] spans values 30 to 34, a difference of 4.
Including the 20 before it or the 5 after it would break the bound.
```

### Example 3

```text
Input: nums = [7,7,9,9,9,7], limit = 0
Output: 3
Explanation: With no difference tolerated, only equal neighbours can group,
and the longest such block is [9,9,9].
```

### Constraints

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^9`
- `0 <= limit <= 10^9`

## Hints

### Hint 1

"No two values differ by more than `limit`" is decided entirely by the
smallest and largest values in the run — checking that pair is checking
everything.

### Hint 2

Grow a window to the right one element at a time. Whenever it becomes invalid,
shrink it from the left until it is valid again; validity can never be
repaired by growing further, so the left edge never needs to move back.

### Hint 3

You need the window's minimum and maximum as it slides. Two deques of indices
— one kept decreasing in value, one increasing — expose both in constant
time, since anything weaker than the newcomer at the back can never be an
extreme again.
