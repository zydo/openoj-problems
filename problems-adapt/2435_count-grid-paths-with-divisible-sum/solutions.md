# Solutions — Count Grid Paths With Divisible Sum

## Dynamic programming over path-sum residues

Only the residue of a route's sum modulo `k` matters, never the sum itself,
so the state space shrinks from astronomical sums to `k` residue classes.
Give each cell a vector of `k` counters in which entry `v` counts the routes
reaching that cell with element sum congruent to `v` modulo `k`. Every route
enters a cell from above or from the left, so the vector at `(i, j)` is the
sum of the two incoming vectors, each cyclically shifted by
`grid[i][j] % k`: a route arriving with residue `r` departs with residue
`(r + g) % k`, so the counter for target `v` pulls from incoming counter
`(v - g) % k`. The answer is the residue-0 entry of the bottom-right cell's
vector, reduced modulo `10^9 + 7`.

The implementation sweeps the grid row by row, keeping one vector per column
in a rolling array `dp[j]`; while cell `(i, j)` is being computed, `dp[j]`
still belongs to the row above and `dp[j-1]` already belongs to the current
row — exactly the two predecessors. The top-left cell seeds a fresh vector
with a single 1 in position `grid[0][0] % k`; first-row and first-column
cells simply skip their missing predecessor, and the `None` guards cover
degenerate shapes safely.

![The worked grid with each cell's value and residue-count vector for k = 3: the corner vector [2 2 2] holds 2 residue-0 routes, traced by the solid 8+2+5+6+9 = 30 and dashed 8+7+3+6+9 = 33 routes.](figures/solution-remainder-vectors.svg)

Each cell costs `O(k)` for its two shifted vector additions, so the total is
`O(m*n*k)` — comfortable because `m*n <= 5*10^4` and `k <= 50`. Space is the
rolling row of `n` vectors of length `k`, i.e. `O(n*k)`, and every addition
is reduced modulo `10^9 + 7` to stay within machine integers.

**Complexity:** `O(m*n*k)` time, `O(n*k)` space.
