# Solutions — Earliest Split Into K Components

## Descending-time union-find sweep

Run Kruskal backwards. Sort the edges by vanishing time, largest first, and
unite them into a union-find that begins as `n` singletons. Just before the
group of edges sharing time `t` is merged, the union-find holds precisely the
graph that survives when everything at time `t` or earlier has vanished — so
if the component count already clears `k` at that instant, `t` is a feasible
answer moment. Feasibility is monotone in `t` and can only first arrive at an
edge time (or at 0), so recording the last group whose pre-merge count clears
`k`, while the sweep walks toward smaller times, leaves the minimum in hand.

Equal-time edges are processed as one group, so a half-merged group is never
mistaken for a real moment; a redundant edge whose union is a no-op leaves
the count alone. Every successful union decrements the count by one, turning
the check into a counter comparison rather than a graph traversal.

After the loop, one final check covers the case where even the untouched
graph — nothing vanished yet — already has `k` or more components, returning
0; an empty edge list lands there at once. Times up to `10⁹` are only sorted
and compared, so no overflow is possible.

Worked example: `n = 3`, edges `[[0,1,5],[1,2,9]]`, `k = 3`. The sweep opens
with 3 components, and the count before merging the time-9 group is already
3, so 9 is recorded as feasible; that merge joins nodes 1 and 2, leaving a
count of 2. Before the time-5 group the count is 2 — short of 3 — so 5 is
not recorded, and the merge joins 0 and 1. The last recorded time stands:
the answer is 9.

**Complexity:** `O(m log m + n)` time, `O(n + m)` space.
