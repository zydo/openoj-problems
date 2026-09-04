# Solutions — Wildcard Word Lookup

## Prefix Tree With Wildcard Forking

Storage is a character tree exactly as in the plain prefix-tree problem: one
node per letter along a word, 26 child slots per node, a flag on every node
where a complete word stops. The new ingredient is the query — a dot commits
to no letter, so the walk stops being a single path.

`search` recurses on (node, position). At a letter position there is only
one slot that could carry the match onward, so the recursion is a straight
line. At a dot position it tries every occupied slot and reports success if
any branch does; branches die on their own once a slot is empty, and a
branch that consumes the whole pattern still has to land on a flagged node
to count. Matching `.oat` against `coal`/`coat`, the dot forks to `c`, and
from there the path is a single line through `o-a-t` to the flagged node of
`coat`.

The bounds do the rest of the reasoning: patterns run at most 25 characters
and hold at most 2 dots, so no more than `26²` forks can ever open — and
after the final dot, every branch is again a single path. Recording a word
never forks at all.

**Complexity:** `O(L)` per `add`; up to `26^D · L` for a pattern of length
`L` carrying `D <= 2` dots; space is the stored characters times 26 slots a
node.
