# Solutions — Rebuild Tree From Two Traversals

Both reconstructions are driven by the same reading of the two arrays:
preorder names a subtree's root before its descendants, and inorder places
that root between its two subtrees. The recursive split asks, per subtree,
"where does my root sit in inorder?" and needs a hash map to answer fast.
The iterative stack asks the converse question — "is the node I just built
due yet in inorder?" — and needs no map at all, because a single cursor
walking inorder detects the moment each left descent finishes.

## Recursive Split

At any point during reconstruction, the next not-yet-used `preorder` entry
is the root of whatever subtree is being assembled. Finding that value
inside `inorder` then divides the remaining work: everything to its left
there belongs under the left child, everything to its right under the right
child, because that is exactly what the inorder order means. Recursing over
the two inorder ranges reassembles the whole tree.

Two refinements take this from quadratic to linear. First, a hash map from
each value to its inorder position answers the split question in constant
time, replacing a per-call scan. Second, `preorder` is never sliced: one
cursor shared across the whole recursion reads it strictly forward, one
value per call. Preorder enumerates a subtree's root, then its entire left
side, then its entire right — which is precisely the sequence in which the
recursion requests roots, so the cursor never has to jump.

![Preorder's first value 5 is located in inorder at position 1, splitting [1] to the left and [7, 9, 12] to the right; the cursor then feeds 1 before 9, 7 and 12.](figures/solution-preorder-inorder-split.svg)

An empty inorder range (`low >= high`) is the recursion's base case, and it
is how absent children come out as `None` without special handling.
Uniqueness of values — guaranteed by the constraints — is what makes each
map lookup name exactly one split point.

**Complexity:** `O(n)` time, `O(n)` space — the position map holds `n`
entries, and the recursion stack is the tree's height, `O(n)` at the worst
for a tree that is one long chain.

## Iterative Stack

This one consumes `preorder` in a plain loop, one value at a time, and
keeps the *spine*: the chain of already-built nodes whose left sides may
still be growing and whose right child is still pending. A cursor into
`inorder` marks the next entry awaiting its turn — and since inorder lists
left subtree, root, right, a spine top equal to `inorder[cursor]` means
exactly one thing: that node's entire left side is finished, because
everything in it has already come up in inorder.

So each new preorder value faces a two-way test. If the spine top is not
yet due, the value is the top's left child — descend, push, continue. If
the top is due, pop it (it will never receive another left descendant) and
keep popping while the exposed ancestor is due too, advancing the cursor
per pop; the new value becomes the right child of the deepest node popped,
which is precisely the node whose left side that run of pops just closed.
On the worked example, 1 becomes 5's left child; 9 arrives with 1 due, and
popping 1 exposes 5 — also due — so 9 becomes 5's right child; then 7
descends left off 9, and 12 arrives with 7 due, then 9 due, landing as 9's
right child.

Every value is pushed once, popped at most once, and the cursor only ever
advances — a linear sweep with no map at all, the inorder array itself
serving as the bookkeeping. The spine is the only extra storage, and it is
exactly the right-most path of the partially built tree, so `O(h)` entries
at any moment. (The Rust port, unable to keep mutable aliases along that
path, records the same decisions in a slot arena — children always taking
higher slots than parents — and assembles the owned boxes bottom-up from
it.)

**Complexity:** `O(n)` time, `O(h)` space beyond the output tree.
