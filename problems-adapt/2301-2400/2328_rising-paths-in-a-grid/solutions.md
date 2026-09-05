# Solutions — Rising Paths in a Grid

## Memoized DP over cells sorted by value

Let `dp[i][j]` be the number of rising paths that start at cell
`(i, j)`. Every such path is the lone cell itself, or that cell followed
by a rising path starting at a strictly larger neighbour:
`dp[i][j] = 1 + Σ dp[ni][nj]` over the four neighbours with
`grid[ni][nj] > grid[i][j]`. The recurrence is acyclic for a structural
reason — values strictly rise along a path, so a path can never return
to a cell it has left — which makes the neighbour subproblems
independent and the sum well defined. Summing `dp` over every cell
counts every path exactly once, since a path is pinned down by its
starting cell and its sequence.

Recursion with memoization risks the stack on a `10^5`-cell grid, so the
canonical solution orders the work instead: process cells by decreasing
value. By the time `(i, j)` is handled, every neighbour holding a larger
value came earlier in the sorted order and its `dp` entry is final —
just read and add. Initializing `dp` to 1 everywhere builds in the
length-1 path of each cell, and reverse-sorting the `(value, i, j)`
triples gives the order outright, no buckets or level grouping.

Ties need no special code: an equal-valued neighbour fails the strict
inequality and is skipped, so a plateau never chains into itself — in
the all-equal pair of Example 2, both `dp` entries stay 1 and the answer
is 2. Counts are reduced modulo `10^9 + 7` as they are added, keeping
fixed-width arithmetic safe; the single-cell grid lands on 1 through the
plain base case. Sorting dominates the run; the neighbour scan is
constant work per cell.

**Complexity:** `O(mn log(mn))` time, `O(mn)` space.
