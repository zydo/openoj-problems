# Count Proper Grid Colorings

## Description

You are given two integers `m` and `n`. Picture an `m x n` grid of white
cells, each of which must be painted — red, green, or blue, your choice.

Count the colorings in which no two cells sharing an edge carry the same
color. The count grows huge, so report it modulo `10^9 + 7`.

### Example 1

```text
Input: m = 1, n = 1
Output: 3
Explanation: A lone cell takes any of the three colors.
```

![The lone cell, red, green, or blue](figures/example-1.svg)

### Example 2

```text
Input: m = 1, n = 2
Output: 6
Explanation: Two side-by-side cells need different colors: 3 choices for
the left cell, then 2 for the right.

r g    g r    b r
r b    g b    b g
```

![All six ways to color two neighboring cells](figures/example-2.svg)

### Example 3

```text
Input: m = 4, n = 4
Output: 7812
```

### Constraints

- `1 <= m <= 5`
- `1 <= n <= 1000`

## Hints

### Hint 1

Treat each legal coloring of one whole column (neighboring rows differing)
as a single state. With at most five rows there are never more than
3 · 2⁴ = 48 states.

### Hint 2

Consecutive columns combine precisely when they disagree in every row, so
the count is a DP down the `n` columns over compatible pairs of states.
