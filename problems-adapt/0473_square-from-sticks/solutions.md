# Solutions — Square From Sticks

## Backtracking with symmetry pruning

An outline of four equal edges is a partition of the pile into four groups of
equal total, so two arithmetic tests come before any search. A pile whose total
is not a multiple of four cannot be split into four equal parts at all, and once
the edge measurement `total / 4` is known, a stick longer than it has nowhere to
lie. `[7,7,7]` dies on the first test; a pile containing a 9 with an edge of 4
would die on the second.

Past those tests the code sorts the pile from longest to shortest and assigns
sticks in that order. Long sticks are the constrained ones — they fit in few
places — so committing them early means a doomed configuration reveals itself a
few levels from the root instead of after an entire subtree has been walked.

The recursion keeps four running fills, one per edge, and nothing else: the
identity of the sticks already lying on an edge has no bearing on what may join
them, only the room left does. For stick `i` the code tries each edge that still
has room, adds the length, recurses on stick `i + 1`, and withdraws the length
if that branch reports failure.

The second pruning is the `tried` set. Two edges holding the same amount are
indistinguishable, so putting the current stick on one of them leads to a search
tree identical to putting it on the other. Recording each distinct fill as it is
attempted and skipping repeats collapses those duplicate branches — most
visibly at the very first stick, where all four edges read zero and only one
placement is worth exploring.

Reaching the end of the pile means every stick was placed under a
never-exceed-the-edge rule while the totals sum to four times the edge, so the
four fills must all equal it; the closing equality test is a safety net rather
than a real decision. With at most 15 sticks the crude bound is `4^n`, but the
prunings keep the realised tree small. Memory is the recursion depth plus the
four fills and one small set per frame.

**Complexity:** `O(4^n)` time, `O(n)` space.
