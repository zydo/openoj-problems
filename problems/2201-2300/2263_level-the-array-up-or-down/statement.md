# Level the Array Up or Down

## Description

An integer array `nums` is indexed from 0. One operation adjusts a single
element: pick an index `i` with `0 <= i < nums.length` and either add 1 to
`nums[i]` or subtract 1 from it.

The array counts as non-decreasing when `nums[i] <= nums[i + 1]` for every
valid `i`, and non-increasing when `nums[i] >= nums[i + 1]` for every valid
`i`. Find the fewest operations that turn `nums` into a non-decreasing
array or into a non-increasing array — whichever direction is cheaper.

### Example 1

```
Input: nums = [4,3,1,6]
Output: 3
Explanation: Lower the 4 to 3 (one subtraction) and raise the 1 to 3 (two
additions), giving [3,3,3,6], which is non-decreasing. Three operations
total; no sequence of fewer operations succeeds in either direction.
```

### Example 2

```
Input: nums = [9,9,9]
Output: 0
Explanation: The array is already both non-decreasing and non-increasing,
so nothing needs to change.
```

### Example 3

```
Input: nums = [8,6,7]
Output: 1
Explanation: Dropping the 7 to 6 yields the non-increasing array [8,6,6]
after a single subtraction (raising the 6 to 7 works too). One operation is
optimal.
```

### Constraints

- `1 <= nums.length <= 1000`
- `0 <= nums[i] <= 1000`

## Hints

### Hint 1

Only the minimum cost to reach a non-decreasing array matters at first; a
max-heap holding the values seen so far drives that computation.

### Hint 2

When the heap's largest value exceeds the current element, the earlier
targets above it must come down to it — pay their difference and replace
the popped maximum with a second copy of the current value.

### Hint 3

The cheapest non-increasing arrangement is the mirror image: negate every
element and repeat the identical sweep, then take the smaller of the two
totals.
