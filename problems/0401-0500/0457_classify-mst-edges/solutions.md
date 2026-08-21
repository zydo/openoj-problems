# Solutions — Classify MST Edges

## Kruskal With Deletion and Forcing Tests

Every verdict hangs on the graph's MST cost, computed once up front by
Kruskal's algorithm: the edge indices are sorted by weight a single time,
and edges are taken in that order whenever a union-find — path-halved and
size-balanced — reports that they join two components that were separate.

An edge is critical exactly when striking it from the graph makes the best
spanning tree dearer or kills it entirely. The test reruns the sweep over
the shared order with that one index skipped and compares totals, counting
a run that used fewer than `n - 1` edges as infinitely costly. An edge is
pseudo-critical when it escapes the critical test yet still sits in some
MST; that is checked by reversing the treatment — union the edge's
endpoints and add its weight before the sweep, then complete it normally —
and asking whether the total still matches the baseline. The order of the
two tests matters: a critical edge also survives the forcing test, so only
edges already known non-critical may be tried for pseudo-criticality. In
the first example, striking edge 2 (`2-3` at cost 3) still leaves the
detour `0-3` at the same cost, so the total holds at 12 and the edge moves
on to the forcing test, which also lands exactly on 12 — pseudo-critical,
and symmetrically for its twin, edge 3.

Each test runs on a fresh union-find over the one precomputed order, so
the sort is paid for once and every test is linear in the edge count. With
at most 200 edges, two tests per edge is comfortably fast. The two answer
lists come back sorted, and edges failing both tests — those in no MST at
all, like edges 5 and 6 in the example — land in neither list.

**Complexity:** `O(E² · α(V) + E log E)` time, `O(V + E)` space.
