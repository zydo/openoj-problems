# Solutions — Lowest Common Ancestor of a Binary Tree

## Recursive Subtree Search

Without the search-tree ordering, a node's value says nothing about which subtree holds the targets, so the whole subtree must be searched. The recursion answers a slightly different question per subtree: does it contain `p` or `q`? It returns the found target node itself, or `None` when neither is present. A node that is `None`, or whose value equals `p` or `q`, is returned immediately — a node counts as a descendant of itself, so matching is itself a successful find.

The LCA reveals itself at the join. At each internal node the search recurses into both children; if the left and right searches each return a (different) target node, the two targets meet at this node for the first time — every node below was checked and saw at most one target — so this node is the lowest common ancestor and is returned upward. Otherwise the non-`None` result (if any) is propagated. The immediate return on a value match is what makes the ancestor case work: when one target is an ancestor of the other, the ancestor is returned from its subtree without ever searching below it, and it wins the propagation against any `None` side.

![The example tree with p = 5's subtree shaded blue and q = 1's subtree shaded gold: the left search returns 5 and the right returns 1, so they first meet at the root, LCA = 3.](figures/solution-subtree-meet.svg)

Because the two targets are guaranteed to exist and be distinct, the root call always returns a node whose value is the answer. Each node is visited at most once, and the recursion stack depth equals the tree height, which on a skewed tree of 10⁵ nodes can reach `n` — the price of the recursive formulation.

**Complexity:** `O(n)` time, `O(h)` space.
