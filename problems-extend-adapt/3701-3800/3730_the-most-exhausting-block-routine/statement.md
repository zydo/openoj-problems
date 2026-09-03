# The Most Exhausting Block Routine

## Description

An exercise routine lines up `n` blocks in a row, where the `i`th block
stands `heights[i]` units tall.

You begin on the ground at height `0` and must visit every block exactly
once, in whatever order you choose. Every move between blocks is scored by
the vertical distance it covers: stepping from a block of height `a` onto a
block of height `b` spends `(a - b)²` units of energy. Opening the routine
counts too — you climb from the ground onto the first block, so starting on
a block of height `heights[i]` spends `heights[i]²`. After that first
landing there is no way back down to the ground.

Choose the visiting order that spends the largest possible amount of energy
and return that amount.

### Example 1

```text
Input: heights = [4,9,2]
Output: 134
Explanation: Visit the blocks in the order [9, 2, 4]. Climbing onto 9 from
the ground spends 9² = 81, dropping from 9 onto 2 spends (9 - 2)² = 49,
and stepping from 2 onto 4 spends (2 - 4)² = 4. The routine spends a total
of 81 + 49 + 4 = 134.
```

### Example 2

```text
Input: heights = [1,10,10,3]
Output: 311
Explanation: One best order is [10, 1, 10, 3]. The opening climb onto 10
spends 10² = 100, the fall to 1 spends (10 - 1)² = 81, the climb back to
the other 10 spends another 81, and the final step onto 3 spends
(10 - 3)² = 49, for a total of 100 + 81 + 81 + 49 = 311.
```

### Example 3

```text
Input: heights = [2,4,6,8]
Output: 120
Explanation: Order the blocks [8, 2, 6, 4]: the opening climb spends
8² = 64 and the three steps spend 36, 16, and 4, so the total is
64 + 36 + 16 + 4 = 120.
```

### Constraints

- `1 <= n == heights.length <= 10⁵`
- `1 <= heights[i] <= 10⁵`

## Hints

### Hint 1

Since every block gets visited and only the order is up to you, sort the
heights and think about where each sorted value belongs.

### Hint 2

In a scored sequence every internal move joins one even position with one
odd position, and the opening climb rewards position 0. Put the largest
ceil(n / 2) values, taken from the back of the sorted array in
non-increasing order, onto the even positions.

### Hint 3

Fill the odd positions with the smallest floor(n / 2) values, taken from
the front of the sorted array in non-decreasing order. Squared differences
are convex, so pairing extremes against each other stretches every move
across the widest gap on offer.
