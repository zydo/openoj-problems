# Solutions — Count Grid Paths

Two ways to count the same objects. The first folds the grid's additive
recurrence into one rolling row; the second notices that a path is nothing but
an arrangement of moves and counts the arrangements with a binomial
coefficient.

## dp

Every path into a cell enters it from above or from the left, so
`paths(r, c) = paths(r-1, c) + paths(r, c-1)` — the count at a cell is the sum
of two counts nearer the start. Along the first row and down the first column
there is exactly one path each (a straight run), and those ones are all the
seeding the recurrence needs.

The table itself never has to exist. One row of `n` slots, initialised to all
ones, is rewritten in place once per grid row, and the update order makes it
correct: when column `j` is reached in a pass, `row[j]` still holds the
previous row's value for that column — the "above" operand — while `row[j-1]`
was overwritten moments earlier in the same pass and holds the current row's
left neighbour. So `row[j] += row[j-1]` applies the recurrence with its two
operands arriving from exactly the two directions a path can come from. After
`m - 1` passes the last slot holds the count for the bottom-right cell.

Degenerate shapes are handled by the loop bounds alone: with `m == 1` no pass
runs, with `n == 1` the inner sweep is empty, and either way the row stays all
ones and the answer is `1` — a single row or column forces its path. At
`m, n <= 100` the largest count stays under `2 * 10^9`, inside 32-bit range
and exact in Python's integers.

**Complexity:** `O(m * n)` time, `O(n)` space.

## combinatorics

Strip the geometry and a path is a word. Reaching the bottom-right corner from
the top-left takes exactly `m - 1` down moves and `n - 1` right moves — `m + n - 2`
moves in total, every one of them forced to be one of those two kinds — and
two paths differ exactly in the order of the word. So the count is the number
of distinct arrangements of a multiset, which is the binomial coefficient
`C(m + n - 2, m - 1)`: choose which `m - 1` of the `m + n - 2` slots hold the
downs.

The evaluation avoids factorials on purpose. With `small = min(m-1, n-1)` (by
the symmetry `C(N, K) = C(N, N-K)` the shorter side gives the shorter loop),
the running value is multiplied by `big - small + j` and divided by `j` at
step `j`. After each step it equals exactly `C(big - small + j, j)`, which is
an integer, so every division lands exactly and no factorial-sized
intermediate is ever built. The fixed-width ports hold the running product in
a 64-bit type, since the product before a division can overshoot the final
answer; doubles in JavaScript and Python's integers both stay exact at these
sizes.

For `m = 4, n = 4` this is `C(6, 3) = 20`; for `m = 2, n = 9` it is
`C(9, 1) = 9`. When either dimension is 1, `small` is 0, the loop body never
runs, and the initial 1 is returned — the single forced path.

**Complexity:** `O(min(m, n))` time, `O(1)` space.
