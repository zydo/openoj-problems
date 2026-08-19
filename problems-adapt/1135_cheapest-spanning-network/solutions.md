# Solutions — Cheapest Spanning Network

## Kruskal With A Disjoint-Set Structure

Paying the least while keeping all `n` nodes mutually reachable is exactly the minimum spanning tree of the graph whose vertices are the nodes and whose weighted edges are the offered links. Nothing bought can sit on a cycle — removing one link of a cycle leaves reachability intact and the bill smaller — so the purchase is a tree, and it must be the lightest one.

Kruskal builds that tree by price. Sort the catalogue ascending and consider each offer once: buy it when its endpoints currently sit in different groups, skip it when they already sit in the same group. Correctness rests on the cut property. Split the nodes any way you like; the lightest link with one endpoint on each side belongs to some minimum tree, and every link Kruskal accepts is lightest across the cut separating the group it is about to merge from everything else.

The group bookkeeping is a `parent` array over `n + 1` slots, with slot `0` idle because numbering starts at one. `find` climbs to the root and rewrites every second pointer on the way up (`parent[x] = parent[parent[x]]`), which flattens the structure enough that lookups behave like constant work without a separate rank array. Accepting an offer means pointing one root at the other and adding `w` to the running bill.

A counter starting at `n` tracks how many groups survive; each purchase decrements it. Reaching `1` means the tree is finished and the loop can stop immediately, since everything still unread costs at least as much as what was just bought. Exhausting the catalogue with the counter above `1` means some node was walled off from the rest, and `-1` is the honest answer. Repeated offers between the same pair, and offers of price `0`, need no special handling — the same-group test disposes of the redundant ones.

The sort is the expensive part; the disjoint-set work that follows is near-linear in the number of offers.

**Complexity:** `O(E log E)` time, `O(V)` space.
