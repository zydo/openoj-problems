# Solutions — Most Cells Without Adjacent Neighbors

## Row-by-row bitmask dynamic programming

A pick can only clash inside its own row or the rows on either side of it,
so the grid never has to be reasoned about as a whole: the state that
matters when filling row `i` is just the set of columns already picked in
row `i - 1`. Encode a row's picks as an `n`-bit mask — bit `c` set means
column `c` is picked — and let `dfs(i, prev_mask)` return the most picks
possible from row `i` onward. The answer is `dfs(0, 0)`.

A mask is legal for a row only if it avoids blocked columns and avoids
horizontally neighboring picks; both tests depend purely on that row's
furniture, and `n <= 8`, so each row's legal masks are listed once by
screening all `2^n` candidates. In the DP a candidate for row `i` is
additionally barred when one of its columns faces an occupied neighboring
column in `prev_mask`; every legal, unbarred candidate contributes
`mask.bit_count() + dfs(i + 1, mask)`, and the recursion keeps the maximum.

Memoization collapses the overlapping subproblems — the state space is at
most `(rows) x 2^n`, each state scanning that row's candidate list, so the
whole search is tiny at `m, n <= 8`. The within-row filter already throws
out masks with side-by-side picks, which keeps the per-row lists far below
`2^n` in practice.

In the first example the middle row contributes a single legal mask beyond
the empty one — its one usable column — and that candidate is barred
against the row above's mask, so the optimum never touches row 1 and the
answer settles at 4. Degenerate rows behave: an all-blocked row offers only
the empty mask (worth zero), and a single-row grid works because the
initial `prev_mask` of 0 bars nothing.

**Complexity:** `O(m * n * 4^n)` time, `O(m * 2^n)` space.
