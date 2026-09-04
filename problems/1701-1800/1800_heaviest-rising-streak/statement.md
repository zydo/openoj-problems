# Heaviest Rising Streak

## Description

You are given an array `nums` of positive integers. Call a contiguous
stretch of the array a rising streak when it climbs strictly — every
element is larger than the one before it. A lone element counts as a
streak of length one.

Among all rising streaks in `nums`, return the greatest sum any single
streak adds up to.

### Example 1

```text
Input: nums = [15,26,4,8,12]
Output: 41
Explanation: [15,26] climbs strictly and sums to 41, while the later
streak [4,8,12] only reaches 24.
```

### Example 2

```text
Input: nums = [2,5,9,14]
Output: 30
Explanation: The entire array climbs, so the heaviest streak is
2 + 5 + 9 + 14 = 30.
```

### Example 3

```text
Input: nums = [7,7,3]
Output: 7
Explanation: Equal neighbours never climb, so no streak grows beyond
a single element and the best any streak offers is 7.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`

## Hints

### Hint 1

Every value is positive, so the heaviest streak ending at a position
is always the full strictly rising run reaching that position —
nothing shorter ending there can beat it.

### Hint 2

One left-to-right sweep is enough: grow a running sum while values
keep strictly increasing, restart it from the current element the
moment they do not, and remember the best sum seen along the way.
