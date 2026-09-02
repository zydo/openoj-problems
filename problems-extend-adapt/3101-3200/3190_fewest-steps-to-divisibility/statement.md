# Fewest Steps To Divisibility

## Description

Start from an integer array `nums`. One adjustment picks a single
element and either raises or lowers it by exactly 1.

Adjust the array until every element is a multiple of 3, and return the
smallest number of adjustments that can do it.

### Example 1

```text
Input: nums = [5,10,7]
Output: 3
Explanation:
Raise 5 to 6, lower 10 to 9, and lower 7 to 6 — one adjustment each,
three in total.
```

### Example 2

```text
Input: nums = [9,12,48]
Output: 0
Explanation:
Every element is already a multiple of 3.
```

### Example 3

```text
Input: nums = [1,3,5]
Output: 2
Explanation:
Lower 1 to 0 and raise 5 to 6; the 3 needs nothing.
```

### Constraints

- `1 <= nums.length <= 50`
- `1 <= nums[i] <= 50`

## Hints

### Hint 1

Elements never interact: an adjustment touches exactly one element, so
the total cost is a per-element sum.

### Hint 2

A value `v` with remainder `r = v % 3` needs `min(r, 3 - r)` steps —
zero when `r` is 0, otherwise exactly one step toward the nearest
multiple of 3.
