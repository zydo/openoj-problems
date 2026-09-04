# Segments That Can Hold Water

## Description

An integer array `nums` is given, and no two of its elements are equal.

Call a segment `nums[l...r]` watertight when it is wide enough and both
of its ends rise above everything they enclose:

- It covers at least three positions: `r - l + 1 >= 3`.
- The lower of its two ends still sits strictly above every element
  strictly between them: `min(nums[l], nums[r]) > max(nums[l + 1], ...,
nums[r - 1])`.

However deep the middle sags, only the height of that ceiling matters.
Count how many segments of `nums` are watertight.

### Example 1

```text
Input: nums = [10,4,6,2,8]
Output: 3
Explanation: The watertight segments are [10,4,6], [6,2,8] and
[10,4,6,2,8]: min(10, 6) = 6 clears the interior 4, min(6, 8) = 6 clears
the interior 2, and min(10, 8) = 8 clears the interior maximum 6.
```

### Example 2

```text
Input: nums = [9,1,2,8,4,7]
Output: 3
Explanation: [9,1,2] works because min(9, 2) = 2 exceeds the interior 1;
[9,1,2,8] works because min(9, 8) = 8 exceeds the interior maximum 2; and
[8,4,7] works because min(8, 7) = 7 exceeds the interior 4. No other
segment clears its interior.
```

### Example 3

```text
Input: nums = [1,2,3,4,5]
Output: 0
Explanation: The array climbs without ever dipping, so no segment has two
ends that both tower over its middle.
```

### Constraints

- `3 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`
- No two elements of `nums` are equal.

## Hints

### Hint 1

Monotonic stacks can hand you the nearest strictly greater element on
either side of every position.

### Hint 2

The test pits both ends against the maximum of the middle — prepare that
maximum with preprocessing instead of recomputing it per segment.

### Hint 3

Enumerate candidates by their endpoints rather than by scanning every
segment.

### Hint 4

The definition is symmetric: settling the case where the left end is the
lower one, and the mirror case where the right end is, covers everything.
