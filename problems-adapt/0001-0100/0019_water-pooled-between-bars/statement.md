# Water Pooled Between Bars

## Description

`height` lists the heights of `n` bars standing side by side, each one unit
wide, with no gaps between them. Rain falls until nothing more can be held:
water settles in the dips and anything above the rim runs off the ends.

Return the number of unit squares of water the arrangement holds.

### Example 1

```text
Input: height = [3,1,0,2,1,4]
Output: 8
Explanation: The bar of height 3 on the left and the bar of height 4 on the
right hold the four dips between them up to level 3, for 2 + 3 + 1 + 2 units.
```

### Example 2

```text
Input: height = [2,0,5,0,3,0,4]
Output: 11
Explanation: Two separate basins. Left of the tall bar, one dip holds 2 units
up to level 2; right of it, the water settles at level 4 and the three
positions there hold 4, 1 and 4.
```

### Example 3

```text
Input: height = [1,2,3]
Output: 0
Explanation: A staircase with no rim on the high side holds nothing.
```

### Constraints

- `n == height.length`
- `1 <= n <= 2 * 10⁴`
- `0 <= height[i] <= 10⁵`

## Hints

### Hint 1

Ask the question one column at a time: how deep is the water directly above a
single bar? Nothing about the rest of the answer is needed to answer that.

### Hint 2

That column's water rises to the rim on its left and the rim on its right, so
its surface sits at the smaller of the two tallest bars on either side — minus
the bar itself, and never below zero.

### Hint 3

Precomputing both running maxima costs two arrays. You can avoid them: walk
inward from both ends, and always advance the end whose bar is shorter. That
end's answer is already fixed by the maximum you have seen on its own side,
because the other side is guaranteed to hold something at least as tall.
