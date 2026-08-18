# Solutions — Deepest Shared Ancestor, Binary Tree

## Recursive Subtree Search

Nothing about a node's value predicts what is stored below it, so no subtree
can be dismissed without being walked. The way out is to have the walk return
something more useful than a boolean. Define `find(node)` to report the target
it encountered inside that subtree — the node itself when its value is `p` or
`q`, `None` when the subtree is empty or holds neither.

Reporting a value match straight away, before descending, is what makes the
above-the-other shape fall out for free: such a node returns itself while its
own descendants are never examined, so the deeper target cannot compete with
it on the way back up.

Everything else is decided at the join. A node recurses into both children; if
each side comes back with a target, that node is the first place the two are
covered together — every node below it saw at most one of them — so it is
returned upward and, because it is never overwritten by an ancestor that gets
only one non-`None` side, it survives all the way to the top. When only one
side reports, that report is passed along unchanged.

![The example tree with p = 26's subtree shaded blue and q = 4's subtree shaded gold: the left search hands back 26, the right hands back 4, and they join at the root, giving 11.](figures/solution-subtree-meet.svg)

Because both targets are guaranteed present and distinct, the outermost call
always returns a real node, and its value is the answer. Every node is touched
at most once; the recursion holds one frame per level, so a tree that
degenerates into a chain of 10⁵ nodes costs that much stack — the price of the
recursive shape.

**Complexity:** `O(n)` time, `O(h)` space.
