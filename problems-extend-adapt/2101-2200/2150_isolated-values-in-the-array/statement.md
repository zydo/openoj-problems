# Isolated Values in the Array

## Description

Given an integer array `nums`, call a value isolated when it occurs exactly
once in the array and neither of its neighbouring values — `x - 1` or
`x + 1` — occurs anywhere in the array.

Collect every isolated value in `nums`. The answer may be returned in any
order.

### Example 1

```text
Input: nums = [12,4,12,9,30]
Output: [4,9,30]
Explanation:
- 12 occurs twice, so it cannot be isolated.
- 4 occurs once and neither 3 nor 5 is present.
- 9 occurs once and neither 8 nor 10 is present.
- 30 occurs once and neither 29 nor 31 is present.
The isolated values are therefore [4, 9, 30]; [30, 4, 9] would be equally
valid.
```

### Example 2

```text
Input: nums = [8,2,3,8]
Output: []
Explanation:
- 2 and 3 each occur once, but they are adjacent to each other, so neither
qualifies.
- 8 occurs three times.
No value survives both checks, so the answer is empty.
```

### Example 3

```text
Input: nums = [7,7,7,41,43]
Output: [41,43]
Explanation:
- The three 7s are ruled out by repetition.
- 41 and 43 each occur once, and since 42 is absent, neither has a present
neighbour.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁶`

## Hints

### Hint 1

The two conditions — "occurs exactly once" and "neighbour absent" — can both
be answered per value if you know, without rescanning the array, how many
times each value occurs and whether a value is present at all.

### Hint 2

Build a frequency table keyed by value in one pass; a value is isolated
exactly when its own count is 1 and neither `x - 1` nor `x + 1` is a key.
