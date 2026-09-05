# Solutions — Smallest Largest Bin Load

## Binary search on the load cap

Work with a yes/no question: can a cap `x` — no bin holding more than `x`
items — accommodate every item? Feasibility is monotone in `x`. If some
cap works, every larger cap works (the same placement is still legal), and
if a cap fails, every smaller one fails too. The answer is therefore the
smallest feasible cap, which binary search finds over `1 .. max(piles)`;
that maximum is always feasible, since one bin may swallow an entire pile.

The feasibility test counts bins. Because a bin draws from a single pile,
a pile of `q` items under cap `x` needs exactly `ceil(q / x)` bins — fewer
bins would force one past the cap by pigeonhole, and splitting into that
many equal-ish parts respects it. The exact integer form
`(q + x - 1) // x` avoids floating point. Summing across piles gives the
least bin count the cap demands, and the cap is feasible precisely when
that sum is at most `n`; spare bins simply stay empty.

Concretely, `n = 5` with `piles = [9,7]`: cap `3` demands
`ceil(9/3) + ceil(7/3) = 6` bins — infeasible; cap `4` demands
`3 + 2 = 5` — exactly the supply, so the loads `4, 4, 1` and `4, 3` do
it, and `4` is the answer. The search keeps `lo` possibly too small and
`hi` known feasible, and the lower-mid halving guarantees each probe
either raises `lo` or lowers `hi` until they meet.

With `m` piles and a value range up to `10^5`, the test runs about
seventeen times.

**Complexity:** `O(m log(max(piles)))` time, `O(1)` space.
