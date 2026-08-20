# Solutions — Fewest Coins To Make Change

The minimum coin count can be attacked two ways: fill in a best-answer table
for every total from the bottom up, or treat totals as graph vertices and
search outward from zero so the first arrival at the target is automatically
optimal.

## dp

Optimal substructure is immediate once you name the last coin used: for total
`a` that coin is some `c ≤ a`, and the remainder `a - c` must itself be made
optimally, giving `dp[a] = min(dp[a - c] + 1)` over all coins. Since
denominations never run out, one pass over totals `1..amount`, each entry
trying every coin, fills the whole table — the unbounded knapsack written
iteratively.

`dp[0]` is 0 because zero coins make zero, and every other slot begins at
infinity, which doubles as the "unreachable" marker. A total that no single
coin can improve keeps its infinity, and the sentinel spreads on its own:
`inf + 1` is still `inf` and never wins a minimum, so entries built on an
impossible remainder stay impossible. The final entry is returned, or `-1`
when it never became finite — the fate of `coins = [4,6]`, `amount = 7`,
where even coins can never total an odd amount.

Smallest-total-first ordering is what makes each lookup sound: by the time `a`
consults `dp[a - c]`, that cell is final. The order also matters because
greed is simply wrong on general denominations — with `coins = [1,4,5]` and
`amount = 8`, spending the 5 first commits you to four more 1-coins, while
the table finds `4 + 4`.

Boundaries: `amount = 0` falls out of the initialization, and coins too
large for the current total are excluded by the `c <= a` guard. At most 12
coins and totals up to 10⁴ bound the double loop near 1.2 · 10⁵
relaxations.

**Complexity:** `O(amount · |coins|)` time, `O(amount)` space.

## bfs

Call every total `0..amount` a vertex and add an edge `a -> a + c` for each
coin `c` that fits. Every edge costs one coin, so the fewest-coin question is
a shortest path from `0` to `amount` — and with all edges of unit cost,
breadth-first search returns exactly that path.

Levels replace the DP's row order: the queue opens holding only `0` (the
zero-coin state) and each round expands the entire current level, which
yields precisely the totals one more coin can reach. `amount` is therefore
first dequeued at its optimal level, since BFS cannot touch a vertex at a
shallower depth than it actually sits. A `visited` array stamps each total as
it is enqueued, so every vertex enters the queue once and the search covers
at most `amount + 1` vertices and `amount · |coins|` edges — the same
asymptotics as the DP, with the frontier explored strictly by coin count
rather than by total.

An impossible target ends as queue exhaustion: once every reachable total
has been expanded and the target never appeared, no path exists and `-1` is
returned (`coins = [4,6]`, `amount = 7`). `amount = 0` is free — it is the
start vertex, dequeued at level 0. Checking `a + c <= amount` before any
addition also keeps values in range in the fixed-width languages, where a
denomination can sit near `INT_MAX`.

**Complexity:** `O(amount · |coins|)` time, `O(amount)` space for the queue
and visited array.
