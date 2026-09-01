# Solutions — Nearest Shared Ancestor of a Binary Tree IV

The targets arrive as plain values — each identifying its node uniquely,
since tree values are distinct — and the answer crosses back as the
shared ancestor's value. The single solution below builds a parent and
depth map in one iterative pass, then folds the classic pairwise lift
over the query values.

## Parent maps folding pairwise lifts

The build is a pre-order walk on an explicit stack — never recursion, as
a skewed tree runs 10^4 nodes deep — writing each value's depth and its
parent's value; values are unique, so a value keys both maps. The answer
is then a fold: hold the first query value as the running ancestor
candidate, and for each further value lift the deeper of the candidate
and the new value to the other's depth, then walk both up in lockstep
until they meet — that meeting point becomes the next candidate. The
shared-ancestor operation is associative — the answer for a list is the
shared ancestor of the running candidate and each new value — so the
fold lands on the deepest node above every queried value.

The fold's two loops resolve every query shape by construction. A
single-value query never enters the fold and returns itself, matching
the "descendant of itself" clause of the definition. A value that is an
ancestor of the others stops the depth-equalization loops exactly at
itself, and the lockstep walk then makes no move. Values spread across
both of a node's subtrees meet at that node, while values confined to
one subtree meet below it — the running candidate only ever climbs, so
once the walk reaches a node spanning everything seen so far, later
values either confirm it or push it higher.

**Complexity:** `O(n + q * d)` time worst case (q = `nodes.length`,
d = tree depth — each pairwise lift climbs at most d levels), `O(n)`
space.
