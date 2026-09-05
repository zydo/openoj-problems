# Solutions — Largest Minimum Price Gap

## Binary Search on the Gap, Greedy Feasibility

The quantity being maximized — the smallest pairwise price difference inside
the basket — behaves monotonically as a target: when some selection of `k`
candies keeps every pair at least `x` apart, that same selection witnesses
every target below `x` as well. A monotone yes/no predicate means the answer
can be searched for directly over `[0, max(price) - min(price)]`, with the
upper-mid form `mid = (lo + hi + 1) // 2` because the predicate reads "at
least x" and the search climbs toward the largest passing `x`.

The feasibility test for one candidate `x` is a single left-to-right sweep
over the sorted prices: commit to the cheapest candy, then commit to each
later candy whose price clears the last committed price by `x` or more.
Deferring a commitment only pushes the chain's frontier rightward and shrinks
the room left for the candies after it, so this earliest-fit sweep packs in
the maximum possible number of candies whose successive gaps are all `>= x`;
the candidate passes exactly when that count reaches `k`. Successive gaps
suffice because among sorted picks the tightest pair is always adjacent in
the chain — any non-adjacent pair straddles at least one full gap.

Boundary behaviour falls out of the search bounds. When the shelf offers too
few distinct prices — Example 3 has three candies priced 6 and one priced 10,
and `k = 3` forces a repeated price — even `x = 1` fails and the search
settles at `lo = 0`. At the other end, `k = 2` collapses the problem to the
widest difference on the shelf, which the sweep confirms directly. Sorting
happens once, before the search, so each probe costs one linear pass; for
Example 1's shelf the probes converge on 8, witnessed by the chain 2, 17, 25.

**Complexity:** `O(n log n + n log D)` time, with `D = max(price) - min(price)`, `O(n)` space for the sorted copy.
