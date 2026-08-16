# Solutions — Redundant Connection

## Union-Find

The input is a tree plus one extra edge, so exactly one cycle exists and the edge to remove is the one that closes it. Processing edges in input order with a union-find structure detects that moment directly: an edge whose endpoints already share a root would reconnect connected components, i.e. close the cycle. Since all the original tree edges connect previously separate components, the extra edge is the first — and only — edge that ever fails the union test, and being last in the input ordering among removable candidates follows for free.

`find` locates a node's root and then walks the path a second time to repoint every visited node straight at it (path compression), so repeated queries flatten the structure and future finds shorten. `union` registers unseen nodes lazily on first touch, links one root under the other, and returns false precisely when both endpoints already have the same root — the signal to return the current edge. Without union by rank the worst-case bound is logarithmic amortized per operation rather than inverse-Ackermann, which is still comfortably fast at this input size.

The scan stops at the first cycle-closing edge; if the input were a genuine tree the loop would finish and return an empty list, though the problem guarantees an answer exists.

Every edge triggers at most two finds and one link, all operating on a parent dictionary sized by the number of distinct nodes.

**Complexity:** `O(n log n)` time, `O(n)` space.
