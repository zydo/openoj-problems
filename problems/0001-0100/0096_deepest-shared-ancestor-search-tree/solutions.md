# Solutions — Deepest Shared Ancestor, Search Tree

Two ways of cashing the same ordering cheque. Both reach each target by a
straight comparison-guided walk, because a search tree never hides a target
behind an inspection. One spends nothing beyond its current position: the two
questions travel together, and the node where they part ways answers on the
spot. The other writes each walk down as a list of values and settles the
matter afterwards, reading the two lists side by side.

## Iterative Descent

Ordering is what makes this a walk rather than a search. Standing on any node,
one comparison places a target: below the node's value it can only be on the
left, above it only on the right. So when `p` and `q` both compare the same
way, the node you are standing on is a shared ancestor, but the child on that
side is a deeper one — and you may step to it without ever inspecting the
other side.

The step is only blocked in two situations, and both of them identify the
answer. Either the targets compare in opposite directions, in which case they
sit in different children and no single child holds both; or the current node's
own value is one of the targets, in which case nothing deeper can contain it,
since a node is not inside either of its own children's subtrees. Both
situations are recognised by the same `else` branch, which is why the loop
needs no special case for the ancestor-of-the-other shape.

Every node on the path is visited once, comparisons only, so nothing is
remembered between steps and the auxiliary space is constant. On the tree from
Example 1 the walk begins at `50`: the targets `20` and `70` straddle it, so it
returns immediately. For `p = 20`, `q = 35` it takes one step left — both are
under `50` — and then stops on `20` because the node's value is a target. The
tree carries no balance guarantee, so the path length `h` can be as long as the
node count when the tree degenerates into a chain.

**Complexity:** `O(h)` time, `O(1)` space.

## Path Comparison

The other route keeps the two searches separate and lets paper do the meeting.
Walk from the root to `p`, recording the value of every node stepped through —
each step is the same single comparison as above, so the recorded list is
exactly the chain of ancestors of `p`, ending with `p` itself. Then do the
same for `q`. Two lists, each in root-to-target order.

The shared ancestors are now visible rather than deduced: both lists begin at
the root, and they agree entry for entry as long as the two walks stayed on the
same node — which is precisely the condition of both targets lying in the same
subtree. Read the lists in lockstep and stop at the first disagreement; the
last value they agreed on is the deepest node whose subtree covers both.
Example 2 spells it out: the `20` path is `[50, 20]`, the `35` path is
`[50, 20, 35]`, and the lockstep ends where the shorter list does, at `20`
itself: the above-the-other shape falls out because one path is a prefix of
the other, with no case of its own.

What the lists buy is a separable question — each walk is an ordinary search,
and the ancestor logic lives in one small comparison loop afterwards. What
they cost is the memory the first method declines: two lists of up to `h`
entries, and a second full pass before anything is decided.

**Complexity:** `O(h)` time, `O(h)` space.
