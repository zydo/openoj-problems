# Best Clip Level for a Target Sum

## Description

You are given an array of positive integers `nums` and a positive integer
`target`.

Pick a level `value` and clip the array at it: every element larger than
`value` becomes `value`, and the rest stay as they are. Add up the result.

Return the level that brings this sum as close as possible to `target` —
that is, minimizing the absolute difference between the sum and `target`. If
two levels are equally close, return the smaller one.

The best level is not necessarily one of the array's values.

### Example 1

```text
Input: nums = [7,2,9], target = 8
Output: 3
Explanation: Clipping at 3 turns the array into [3,2,3], which sums to 8 —
exactly the target.
```

### Example 2

```text
Input: nums = [3,4,6], target = 13
Output: 6
Explanation: The array already sums to 13, and every level of 6 or more
leaves it untouched. 6 is the smallest such level, so the tie goes to it.
```

### Example 3

```text
Input: nums = [4000,1000,7000,2000], target = 6500
Output: 1833
Explanation: Level 1833 gives 1833 + 1000 + 1833 + 1833 = 6499, one short of
the target; level 1834 overshoots to 6502. The answer never appears in the
array.
```

### Constraints

- `1 <= nums.length <= 10⁴`
- `1 <= nums[i], target <= 10⁵`

## Hints

### Hint 1

As the level rises, the clipped sum can only grow — each term is pinned from
below or released upward. Sketch the sum against the level and note the
shape.

### Hint 2

That monotone curve crosses `target` somewhere. A lower-bound search finds
the smallest level whose sum reaches the target, and the best level is one
of that level and the one just below it.

### Hint 3

Compare the two candidates' absolute differences; when they tie, the smaller
level wins. Levels above the maximum element do nothing and need no testing.
