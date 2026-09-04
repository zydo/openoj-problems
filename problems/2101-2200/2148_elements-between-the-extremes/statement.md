# Elements Between the Extremes

## Description

Call an element of an integer array in-between when the array also
contains some value strictly below it and some value strictly above it.
Given an array `nums`, return how many of its elements are in-between.

### Example 1

```text
Input: nums = [8,3,12,5,12]
Output: 2
Explanation: Only 8 and 5 qualify — each has the 3 strictly below and a
12 strictly above. The two 12s tie for the maximum so nothing lies above
them, and 3 is the minimum.
```

### Example 2

```text
Input: nums = [-7,0,9,-2,3]
Output: 3
Explanation: -7 is the minimum and 9 the maximum, so neither can qualify.
The remaining 0, -2, and 3 all have witnesses on both sides.
```

### Example 3

```text
Input: nums = [4,4,4]
Output: 0
Explanation: Every element is simultaneously the minimum and the maximum,
so no element has a strictly smaller or strictly greater partner.
```

### Example 4

```text
Input: nums = [1,2]
Output: 0
Explanation: In a two-element array each element is one of the extremes,
leaving nothing strictly between them.
```

### Constraints

- `1 <= nums.length <= 100`
- `-10⁵ <= nums[i] <= 10⁵`

## Hints

### Hint 1

The minimum can never look downward and the maximum never upward — which
elements does that leave as candidates?

### Hint 2

An element qualifies exactly when `min < element < max`. One pass finds
the two bounds; a second pass does the counting.

### Hint 3

Mind the degenerate array where every value coincides: both bounds
collapse onto the same value and the count must come out zero.
