# Solutions — Non-Adjacent Loot in a Tree

The rule binds a node only to its parent and its children, so both solutions
here rest on the same two-number state per subtree: the best total when its
root is taken, and the best when the root is barred. What separates them is
who does the remembering. One never states the question twice — a single
post-order pass carries both numbers home in the same return. The other asks
each question on demand, in whatever order the questions arrive, and leaves a
memo table to answer repeats.

## Postorder Pairs

Each subtree carries a self-contained answer described by two numbers: the
best total when the subtree's root is taken, and the best when it is left
out. A parent's pair is assembled from its children's pairs and nothing
else, which is why one bottom-up traversal computes them all without any
shared state.

The recurrence is immediate. Taking a node rules out taking either child, so
`take_here = node.val + left_skip + right_skip`. Leaving a node out frees
each child to pursue whichever of its own two options is larger, so
`skip_here = max(left_take, left_skip) + max(right_take, right_skip)`. An
empty subtree returns the pair `(0, 0)`, and the answer is the larger of the
root's two numbers.

Returning the pair is what keeps this linear. A formulation that asks each
child separately for "the best plan among the grandchildren" and "the best
plan excluding this node" walks the same subtree twice, and that doubling
compounds at every level into exponential work; carrying both values in one
return evaluates every subtree exactly once.

![The example tree annotated with each node's (take, skip) pair: the leaves return (5, 0) and (6, 0), node 1 returns (1, 5), node 2 returns (2, 6), and the root returns (take 15, skip 11); accent nodes mark the optimal plan 4 + 5 + 6 = 15.](figures/solution-take-skip-pairs.svg)

Concretely, for the tree `[4,1,2,null,5,null,6]`: both leaves report `(5, 0)`
and `(6, 0)`. The node holding 1 sits above the leaf 5, so taking it yields
`1 + 0 = 1` while skipping it yields `max(5, 0) = 5`, giving the pair
`(1, 5)`; by the same arithmetic the node holding 2 gives `(2, 6)`. The root
then takes `4 + 5 + 6 = 15` versus skipping for `max(1, 5) + max(2, 6) = 11`,
so 15 is the answer.

The base case and the `max` wrappers absorb the edge shapes: a one-node tree
returns its own value, zeros never distort the choice, and a tree degenerating
into a chain merely deepens the recursion — with at most 10⁴ nodes the stack
is bounded by the tree height, O(n) in the worst case.

**Complexity:** `O(n)` time, `O(h)` space for the recursion stack (where `h`
is the tree height).

## Memoized Recursion

The second method declines to schedule the questions and instead makes each
one answerable on its own. `take(node)` asks for the best total in the
subtree under a plan that chooses `node`; `skip(node)` asks for the best under
a plan that bars it. `take` is trivial once the children are barred —
`node.val + skip(left) + skip(right)` — and `skip` lets each child do its
better thing — `max(take(child), skip(child))` per side. The root's answer is
the better of its two questions.

Left bare, these questions are dangerous. Answering `take(node)` needs the
children's `skip` values; answering `skip(node)` needs both of each child's
values; and nothing stops the same subtree from being asked — and re-walked —
at the top of several different question chains, which is the exponential
blowup the paired return avoids. The cure is the oldest one in the book: two
memo tables, one per question, keyed by the node. The first time a question
about a subtree is settled, its answer is recorded; every later asking is a
lookup. Each of the `2n` questions does `O(1)` work of its own, so the whole
computation is linear — but through bookkeeping rather than scheduling.

The tables are the entire difference in cost. Where the paired return held
nothing beyond the call stack, this one stores two entries per node, `O(n)`
memory, and it stores them for exactly as long as the computation runs. The
recursion depth is the same `O(h)`, one frame per question chain, and the
same example resolves identically: the leaves' answers are computed once,
reused by both parent questions, and the root still weighs 15 against 11.

**Complexity:** `O(n)` time, `O(n)` space for the two memo tables.
