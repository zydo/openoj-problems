# Solutions — Fewest Swaps For Rising Rows

## Two-state keep/swap DP

Nothing about a column except its own state — exchanged or not — can influence
a distant column, and the cost of a plan is simply how many columns are in the
exchanged state. That makes a left-to-right sweep with two running numbers
enough. Let `keep` be the cheapest plan covering columns `0 .. i` that leaves
column `i` alone, and `swap` the cheapest one that exchanges it.

Advancing the sweep across the boundary between `i - 1` and `i` means asking
which pairs of states leave both rows rising there, and the answer depends only
on the four numbers around that boundary. The straight ordering — `top[i-1]`
below `top[i]` and `bottom[i-1]` below `bottom[i]` — means the two columns may
agree: `keep` extends from the old `keep`, and `swap` extends from the old
`swap` at a cost of one more exchange. The crossed ordering — `top[i-1]` below
`bottom[i]` and `bottom[i-1]` below `top[i]` — means the two columns may
disagree: `keep` extends from the old `swap`, and `swap` from the old `keep`
plus one. Neither ordering excludes the other, so both branches are tried and
the cheaper result wins; the promise that the input is solvable is what
guarantees at least one branch fires at every boundary, keeping both running
values finite.

Seed the sweep at column 0 with `keep = 0` and `swap = 1`, since exchanging the
first column costs exactly one move, and read the answer off the last column as
the smaller of the two. Only the previous column's pair is ever consulted, so
the sweep needs constant memory. Repeated values are the reason both orderings
have to be tested with strict comparisons: a tie such as `4` sitting under `4`
kills the straight branch while leaving the crossed one alive.

Example 1 (`top = [1,2,7,6,9]`, `bottom = [2,4,4,8,10]`) shows the pair moving:

1. Column 0 starts the sweep at `keep = 0`, `swap = 1`.
2. Column 1 (`2` over `4`): only the straight ordering holds, because `2` is
   not below `2`. The pair becomes `keep = 0`, `swap = 2`.
3. Column 2 (`7` over `4`): the straight ordering dies on `4` versus `4`, the
   crossed one survives, and the roles trade — `keep = 2`, `swap = 1`.
4. Column 3 (`6` over `8`): `7` is not below `6`, so again only the crossed
   ordering works, giving `keep = 1`, `swap = 3`.
5. Column 4 (`9` over `10`): both orderings hold and the minimum keeps
   `keep = 1`, `swap = 2`.
6. The answer is the smaller final value, `1`.

**Complexity:** `O(n)` time, `O(1)` space — two integers rolled forward.
