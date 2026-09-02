# Counting Cohesive Subarrays

## Description

An integer array `nums` is given, indexed from zero. Call one of its
subarrays cohesive when no two of its elements stray more than 2 apart:
for the run occupying indices `i` through `j`, every pair of positions
`i1, i2` inside `[i, j]` must satisfy
`0 <= |nums[i1] - nums[i2]| <= 2`.

Count the cohesive subarrays of `nums`. (A subarray is a non-empty,
contiguous slice.)

### Example 1

```text
Input: nums = [2,2,2]
Output: 6
Explanation: Equal neighbors never differ by more than 2, so every one
of the 3 + 2 + 1 = 6 subarrays qualifies — three of size 1, two of
size 2, one of size 3.
```

### Example 2

```text
Input: nums = [4,6,5,8]
Output: 7
Explanation: The qualifying runs are [4], [6], [5], [8] singly; the
pairs [4,6] and [6,5] (spreads of 2 and 1); and [4,6,5] (spread 2).
Everything containing the 8 beside the 5 spans at least 3, and the
whole array spans 4, so the total is 4 + 2 + 1 = 7.
```

### Example 3

```text
Input: nums = [7]
Output: 1
Explanation: A lone element trivially agrees with itself; the count is
1.
```

### Example 4

```text
Input: nums = [9,3,5,7,5]
Output: 9
Explanation: The 9 sits 6 above its neighbor, so it survives only as
the singleton [9]. On the tail [3,5,7,5], any run reaching from the 3
to the 7 spans 4 and fails — [3,5,7] and longer are out — but the four
singles, the three pairs [3,5], [5,7], [7,5] (each within 2), and the
triple [5,7,5] all qualify. That is 1 + 4 + 3 + 1 = 9.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`

## Hints

### Hint 1

A sweep by right endpoint works: for each position, find how far back
the run can extend while its value band stays no wider than 2, and
credit every start it still reaches.

### Hint 2

Track the window's extremes with two monotonic deques — one storing
indices of rising values, one of falling values. When their fronts
drift more than 2 apart, advance the left end until they agree again.
