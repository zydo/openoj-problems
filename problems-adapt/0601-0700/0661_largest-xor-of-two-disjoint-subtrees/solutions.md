# Solutions — Largest XOR of Two Disjoint Subtrees

## Post-order Sums, a Trie Filled in Exit Order

Each node names the subtree rooted there, and a candidate's worth is the total
of the values under it, so the opening move is `subtree_sum[v]` for every `v`.
No recursion is needed: record a DFS visit order once, then sweep it backwards,
pushing each node's accumulated total into its parent. Disjointness has an
equally clean restatement — in a rooted tree the subtree at `u` overlaps the
subtree at `v` precisely when one of `u`, `v` is an ancestor of the other. So
the goal is the maximum XOR of subtree sums over all ancestor-free node pairs.

Ancestor-free pairs are caught by _when_ they meet. Keep one DFS and, beside
it, a binary trie holding the sums of subtrees that have already been closed
out — popped off the stack in full. The instant node `v` is entered, nothing
inside `v`'s subtree has been added, and none of `v`'s ancestors have finished
(they are all still open higher up the stack), so the trie contains nothing but
completed subtrees disjoint from `v`'s: the legal partners, exactly. Querying
with `subtree_sum[v]` at entry time returns the best XOR `v` can ever achieve,
and once `v`'s subtree has been popped completely its own total joins the trie
for the disjoint subtrees still to come.

Numbers enter the trie as fixed-width bit strings, the width taken from the
largest subtree sum. A maximum-XOR query descends from the top bit, taking the
child storing the opposite bit whenever one exists — writing that bit into the
answer — and settling for the matching-bit child otherwise. The greedy is sound
because a higher bit outweighs every lower bit combined. Nodes live in a flat
array of child pairs rather than as linked objects, which keeps allocation
cheap at `n` up to fifty thousand. An empty trie answers 0, which doubles as
the required fallback: in a path-shaped tree such as Example 2 every subtree
nests inside another, so no legal pair ever forms.

For the branching shape of Example 3, the two whole branches off the root both
total 20 and would score 0 against each other; the trie search instead pairs
the sum-20 subtree at node 1 with the sum-15 subtree at node 4 for
`20 XOR 15 = 27`.

Every node enters the trie once and queries it once, each operation costing
`O(B)` where `B` is the bit width of the largest total (roughly 46 at these
limits). The traversal is linear, so the whole method runs in `O(n·B)`.

**Complexity:** `O(n·B)` time, `O(n·B)` space.
