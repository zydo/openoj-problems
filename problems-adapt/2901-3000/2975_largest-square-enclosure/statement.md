# Largest Square Enclosure

## Description

A plot of land occupies the rectangle with corners `(1, 1)` and `(m, n)`.
Its four outer sides are already fenced, and those border fences can
never be taken down. Inside the plot there are additional interior
fences: the fence listed at `hFences[i]` runs straight across the plot
from `(hFences[i], 1)` to `(hFences[i], n)`, and the one listed at
`vFences[i]` runs straight up from `(1, vFences[i])` to `(m, vFences[i])`.

You may tear out any subset of the interior fences — possibly none —
and the fences that remain split the plot into rectangular pens. Return
the area of the largest square pen you can end up with, or `-1` if no
subset of removals leaves a square. The area can be huge, so report it
modulo `10⁹ + 7`.

### Example 1

![diagram](figures/2975-1.svg)

```text
Input: m = 4, n = 3, hFences = [2,3], vFences = [2]
Output: 4
Explanation: Pulling out the interior fences at rows 2 and column 2
leaves one open 2 x 2 square, whose area is 4.
```

### Example 2

![diagram](figures/2975-2.svg)

```text
Input: m = 6, n = 7, hFences = [2], vFences = [4]
Output: -1
Explanation: No matter which fences are removed, no square can be
enclosed.
```

### Example 3

```text
Input: m = 5, n = 4, hFences = [2,4], vFences = [3]
Output: 9
Explanation: Removing the fence at row 2 and the fence at column 3
merges everything above row 4 into a single 3 x 3 square, so the answer
is 9.
```

### Constraints

- `3 <= m, n <= 10⁹`
- `1 <= hFences.length, vFences.length <= 600`
- `1 < hFences[i] < m`
- `1 < vFences[i] < n`
- Within each of `hFences` and `vFences`, all values are distinct.

## Hints

### Hint 1

Append the two mandatory border rows `1` and `m` to `hFences`. Any
square side that survives horizontally is the gap between two of those
positions.

### Hint 2

Do the same for the columns: add `1` and `n` to `vFences`, and every
candidate vertical side is a gap between two of those positions.

### Hint 3

The answer's side is the largest gap that both directions can produce;
square it and reduce modulo `10⁹ + 7`.
