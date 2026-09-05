# Counting K-Move Grid Journeys

## Description

You are given a grid of `n` rows and `m` columns, both numbered from 1,
together with an integer `k` and two cells `source` and `dest`, each
given as `[x, y]`.

One move takes you from a cell `[x1, y1]` to any cell `[x2, y2]` that
lies in the same row or the same column — `x1 == x2` or `y1 == y2` —
except that staying put is not a move: `x1 == x2` and `y1 == y2`
simultaneously is not allowed.

Count the distinct sequences of exactly `k` moves that begin at `source`
and end at `dest`. Because the count can be enormous, return it modulo
`10⁹ + 7`.

### Example 1

```text
Input: n = 2, m = 3, k = 2, source = [1,1], dest = [2,3]
Output: 2
Explanation: Exactly two sequences work:
- [1,1] -> [1,3] -> [2,3]
- [1,1] -> [2,1] -> [2,3]
A first move to [1,2] is a dead end, since [2,3] shares neither its row
nor its column.
```

### Example 2

```text
Input: n = 3, m = 4, k = 2, source = [1,1], dest = [1,1]
Output: 5
Explanation: The first move can go to any of the three other cells in
row 1 ([1,2], [1,3], [1,4]) or either of the two other cells in column 1
([2,1], [3,1]) — five options — and from each of them the only second
move that lands back on [1,1] is the return trip.
```

### Constraints

- `2 <= n, m <= 10⁹`
- `1 <= k <= 10⁵`
- `source.length == dest.length == 2`
- `1 <= source[0], dest[0] <= n`
- `1 <= source[1], dest[1] <= m`

## Hints

### Hint 1

Every move changes exactly one coordinate, so the `k` moves split into
some that move along a row and some that move along a column.

### Hint 2

If `i` of the moves travel along rows, then the x-coordinates alone form
a walk of `i` steps on a line of `n` cells that never stands still, and
the y-coordinates form a walk of `k - i` steps on a line of `m` cells.

### Hint 3

Count line walks with two running values: walks of `t` steps ending on
the target, and walks ending anywhere else. A step onto the target can
come from any of the other `size - 1` cells, while a step elsewhere has
`size - 2` or `size - 1` destinations depending on whether it starts
from the target.

### Hint 4

Interleave the two coordinate walks freely: choosing which `i` of the
`k` moves travel along rows gives `C(k, i)` interleavings, so the answer
sums `C(k, i)` times the two line-walk counts over all `i`.

### Hint 5

Binomial coefficients come from factorials with modular inverses, and
cell counts as large as `10⁹` enter the arithmetic only through their
residues modulo `10⁹ + 7`.
