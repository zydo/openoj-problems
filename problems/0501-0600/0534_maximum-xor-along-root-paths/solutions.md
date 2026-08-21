# Solutions — Maximum Xor Along Root Paths

## Offline DFS with a Binary Trie

Every query wants the largest XOR of `val` against some value on the chain
from its node up to the root. Answer all of them offline inside a single
depth-first traversal and those chains stop being separate: push a node's
value into a binary trie on the way down, answer whatever queries hang at
that node, and pop the value on the way back up. At any moment the trie
holds exactly the ancestors of the current node, so a query stationed there
reduces to a plain max-XOR lookup.

That lookup is the usual greedy descent: starting from the most significant
of 18 bits (plenty, since node numbers and query values stay under 2^18),
step into the child offering the complement of the query's bit whenever that
subtree survives, fixing the result bit to 1, and otherwise settle for the
matching-bit child. The trie lives in flat parallel lists — `nxt` with two
child slots per trie node, plus a per-node `count` — rather than nested
objects; that keeps constants small and makes undo trivial: decrementing
`count` along the inserted spine, while `query_max` consults
`count[cand] > 0` so emptied branches are never entered.

The walk itself is iterative, with explicit `(node, exiting)` stack pairs —
recursion could overflow on a chain of 10^5 nodes such as the third
example's — and queries are bucketed by node together with their original
positions so answers land back in input order. Each value enters and leaves
the trie once (18 levels either way) and every query descends 18 levels
once.

**Complexity:** `O((n + q)·B)` time with `B = 18` bits, `O(n·B)` space.
