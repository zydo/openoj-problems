# Largest Skyline Rectangle

## Description

You are given an integer array `heights` that describes a skyline of
unit-width columns standing on a shared baseline: column `i` rises
`heights[i]` units.

Find the widest-by-tallest axis-aligned rectangle that fits entirely under
the skyline, and return its area.

### Example 1

```text
Input: heights = [3,1,4,2,2,5]
Output: 8
Explanation: A rectangle of height 2 covers the four columns at positions 2
through 5 (heights 4, 2, 2, 5); 2 x 4 = 8. Nothing better exists: at height
5 or 4 only a single column qualifies, and at height 3 the spread covers
just position 0.
```

### Example 2

```text
Input: heights = [7]
Output: 7
Explanation: A single column is itself the best rectangle, 7 x 1.
```

### Example 3

```text
Input: heights = [4,4,4]
Output: 12
Explanation: The three equal columns merge into one 4 x 3 block.
```

### Constraints

- `1 <= heights.length <= 10⁵`
- `0 <= heights[i] <= 10⁴`

## Hints

### Hint 1

A rectangle under the skyline can be no taller than the shortest column it
covers, so the useful candidates are: for each column, a rectangle exactly
as tall as that column — the question is only how far it spreads sideways.

### Hint 2

That spread stops at the nearest strictly shorter column on each side of
it. Keeping a stack of columns in rising height order makes both stopping
points available without rescanning.

### Hint 3

When a shorter column arrives, every taller column on the stack has just
met its right stopping point: pop them one by one, with the spread running
from the new stack top to the arriving index. A final column of height 0
flushes whatever remains.
