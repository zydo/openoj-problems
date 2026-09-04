# Merge Neighbors That Share A Factor

## Description

Work on an integer array `nums` by repeating one move for as long as it is
available:

- Find two neighboring values that share a common factor greater than one.
- Remove that pair and put a single number in their place: their least
  common multiple.
- Once no neighboring pair shares a common factor, the process stops.

Return the array that remains when the process ends. The outcome does not
depend on which eligible pair merges first — every merge order settles on
the same final array.

The inputs are constructed so that every value left in the final array is
at most 10⁸.

Say two values `x` and `y` share a factor when `GCD(x, y) > 1`, where
`GCD(x, y)` is the greatest common divisor of `x` and `y`.

### Example 1

```text
Input: nums = [8,4,2,3]
Output: [8,3]
Explanation:
- (8, 4) share a factor: LCM(8, 4) = 8. Now, nums = [8,2,3].
- (8, 2) share a factor: LCM(8, 2) = 8. Now, nums = [8,3].
No neighboring pair shares a factor any longer, so the final array is
[8,3].
A different merge order reaches the same array.
```

### Example 2

```text
Input: nums = [4,6,10,15]
Output: [60]
Explanation:
- (4, 6) share a factor: LCM(4, 6) = 12. Now, nums = [12,10,15].
- (12, 10) share a factor: LCM(12, 10) = 60. Now, nums = [60,15].
- (60, 15) share a factor: LCM(60, 15) = 60. Now, nums = [60].
A lone 60 is all that remains.
```

### Example 3

```text
Input: nums = [5,7,11]
Output: [5,7,11]
Explanation: Every neighboring pair is coprime, so no move is ever
available and the array comes back unchanged.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`
- Every value in the final array is at most 10⁸.

## Hints

### Hint 1

Because the merge order cannot change the outcome, you may sweep through
the array once from left to right, always trying to merge each value into
the run of already-settled values on its left.

### Hint 2

A merge hands you a fresh value, and that value may itself share a factor
with its new left neighbor — keep folding leftward until the freshly
formed number no longer merges.

### Hint 3

A stack of settled values makes the sweep cheap: push each incoming value,
and while the top of the stack shares a factor with it, pop the top and
replace the incoming value with their LCM.
