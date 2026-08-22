# Solutions — Cheapest Spanning Network

Both grow the same cheapest tree on the strength of one fact: any way you
split the nodes, the lightest link with one endpoint on each side belongs to
some minimum purchase. Kruskal reads the whole catalogue in price order,
buying each offer that joins two groups still separate and tracking the
groups in a disjoint-set structure. Prim plants a single node instead and
grows the purchase outward, keeping the offers leaving the tree in a
priority queue so the cheapest is always the one on top.

## Kruskal With A Disjoint-Set Structure

Paying the least while keeping all `n` nodes mutually reachable is exactly the minimum spanning tree of the graph whose vertices are the nodes and whose weighted edges are the offered links. Nothing bought can sit on a cycle — removing one link of a cycle leaves reachability intact and the bill smaller — so the purchase is a tree, and it must be the lightest one.

Kruskal builds that tree by price. Sort the catalogue ascending and consider each offer once: buy it when its endpoints currently sit in different groups, skip it when they already sit in the same group. Correctness rests on the cut property. Split the nodes any way you like; the lightest link with one endpoint on each side belongs to some minimum tree, and every link Kruskal accepts is lightest across the cut separating the group it is about to merge from everything else.

The group bookkeeping is a `parent` array over `n + 1` slots, with slot `0` idle because numbering starts at one. `find` climbs to the root and rewrites every second pointer on the way up (`parent[x] = parent[parent[x]]`), which flattens the structure enough that lookups behave like constant work without a separate rank array. Accepting an offer means pointing one root at the other and adding `w` to the running bill.

A counter starting at `n` tracks how many groups survive; each purchase decrements it. Reaching `1` means the tree is finished and the loop can stop immediately, since everything still unread costs at least as much as what was just bought. Exhausting the catalogue with the counter above `1` means some node was walled off from the rest, and `-1` is the honest answer. Repeated offers between the same pair, and offers of price `0`, need no special handling — the same-group test disposes of the redundant ones.

The sort is the expensive part; the disjoint-set work that follows is near-linear in the number of offers.

**Complexity:** `O(E log E)` time, `O(V)` space.

## Heap-Based Prim

Prim refuses to price the whole catalogue up front. Plant node `1` as the
root of the purchase and keep what is bought connected at every step; the
only question that matters is which offer to take next, and the answer is
the cheapest one leaving the tree. A priority queue of `(price, node)`
records keeps that answer on top, so growth is a loop of pops and
settlements rather than one global sort.

Correctness rests on the same cut property Kruskal leans on, read from the
growing side. The bought nodes form one shore of a cut and every unsettled
node the other; the lightest link with one endpoint on each shore is safe
to buy, and that is precisely the record the queue yields next. Which node
serves as the root cannot matter, since every minimum tree costs the same
total.

The catalogue arrives as a flat list of offers, so the first move is to
re-index it into adjacency lists, each link filed under both endpoints
because it is undirected. A `visited` flag over the `n + 1` slots (slot `0`
idle, numbering starting at one) marks the shore. Queued records are never
decreased in place — a cheaper offer for a node already queued is pushed as
a second record, and the loser of that race is discarded on its pop by the
stale-entry guard `visited[v]`. Settling a node books its record's price
into the running bill — the root's own record carries price `0`, so
planting the tree costs nothing — and files the offers to its
still-unsettled neighbours.

Each settlement grows the tree by exactly one node, so after `n` of them
the purchase spans everything and the loop stops with whatever is left in
the queue unread. A queue that drains while nodes remain unsettled means
the catalogue never reached them, and `-1` is the honest answer. Repeated
offers between the same pair, and offers of price `0`, need no special
handling — the stale-entry guard buries the redundant records.

Every offer enters the queue at most twice, once per endpoint, and each
push and pop costs a single logarithmic step; no sort of the catalogue
happens anywhere.

**Complexity:** `O(E log V)` time, `O(V + E)` space.
