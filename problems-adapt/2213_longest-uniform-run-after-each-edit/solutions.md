# Solutions — Longest Uniform Run After Each Edit

## Segment tree over block summaries

Up to `10^5` edits, each followed by a whole-string question, rule out
rescanning. The segment tree that fits stores, per node, a summary of its
span in five fields: the span's length, its first and last characters, the
longest uniform prefix, the longest uniform suffix, and the longest uniform
block anywhere in the span. After each edit the root's block field is the
answer, so the whole job is maintaining those summaries under point
updates.

Merging is where the care goes. A parent's prefix is the left child's
prefix, stretched further only when the left child is one uniform block
throughout and its last character equals the right child's first; the
suffix follows the mirror rule. A block may also sit across the seam,
joining the left child's suffix to the right child's prefix when the
boundary characters agree, and the parent's best is the largest of the two
children's bests and that joined candidate. These five fields are exactly
what a parent needs from its children — the string itself is never
consulted after the build.

The tree is built once bottom-up. Each edit rewrites a leaf (both the node
and the mirrored `chars` array) and recomputes the `O(log n)` nodes on the
path to the root; reading the root afterwards is free, so `k` edits cost
`k log n` on top of the `O(n)` build. A leaf's summary is the trivial one —
a block of length 1 — and the `n == 0` guard keeps the build defined for
an empty string.

**Complexity:** `O(n + k log n)` time, `O(n)` space.
