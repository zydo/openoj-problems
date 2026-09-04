# Solutions — Most Dance Pairings

Each pair on the floor is a leader–follower pair, every dancer appears in at
most one pair, and only pairs allowed by `grid` may form — so the answer is a
maximum matching in the bipartite graph whose left side is leaders, right side
is followers, and edges are the `1` cells.

## Augmenting paths, leader by leader

Process the leaders one at a time, keeping `invitations[follower]`, the leader
currently paired with that follower (or `-1`). To place a new leader, walk his
compatible followers: a free follower ends the search, and a taken follower
recurses into the leader holding her, asking him to move to another follower
of his own. That recursive reroute is an alternating path; if it ends at a
free follower the path is _augmenting_ — every leader on it gets (re)matched
and the total grows by exactly one. A `seen` set
per top-level attempt keeps each follower from being probed twice, so the search
for one leader costs at most `O(m·n)`.

If an attempt fails, the leader stays unpaired; by the matching theory behind
this construction (Kuhn's algorithm), retrying earlier leaders can never rescue
him — the matching left behind is already maximum for the leaders processed
so far, and the final count is the maximum matching overall. With `m, n ≤ 200`
the recursion depth is bounded by the number of followers, far under any stack
limit, and the answer is at most `min(m, n)`, trivially inside 32 bits.

**Complexity:** `O(m²·n)` time, `O(n)` extra space.
