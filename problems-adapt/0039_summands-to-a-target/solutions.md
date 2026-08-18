# Solutions — Summands To A Target

## Backtracking with a start index

The recursion carries exactly two pieces of state: `remaining`, how much of the
target is still owed after the summands already on the path, and `start`, the
lowest candidate position still permitted. Owing nothing is a hit — the path is
copied into the results, because the path itself keeps mutating. Otherwise the
loop runs from `start` to the end of the array, appends a candidate, and
recurses.

The one detail that decides correctness is the index handed to that recursive
call. It is `i`, not `i + 1`: staying put is what lets a candidate be taken
again, and refusing to go below `i` is what stops the same multiset being
assembled twice. Together they force every path to visit positions in
non-decreasing order, so of all the orderings of a given multiset exactly one
is ever built.

![The search tree for candidates [3,4,8,10] and target 10: paths keep their start index, so [3,3,4] is reachable while [3,4,3] never forms; dead ends and the two hits are marked.](figures/solution-backtracking-tree.svg)

A candidate exceeding `remaining` is passed over before the call is made, which
kills a doomed branch one level earlier than letting it recurse and discover a
negative balance. That pass-over is a skip rather than a stop: the array is not
promised in sorted order, so an oversized entry tells you nothing about the
entries after it — as in `candidates = [6,4,9]`, where 9 is too big for a
remainder of 4 but the 4 that follows it is not. The single `path` list is
appended to before each call and truncated after, so at any moment only one
partial way is in memory.

Take `candidates = [3,4,8,10]` with `target = 10`. Choosing 10 immediately owes
nothing and is recorded. Choosing 8 leaves 2, below every candidate, so that
branch dies at once. Choosing 3 twice leaves 4, and the 4 that follows closes
it out as `[3,3,4]`; the sibling branch `[3,4]` leaves 3 but may no longer look
back at the 3, so it dies.

With `n` candidates, target `T` and smallest candidate `M`, no path is longer
than `T / M` and each node branches at most `n` ways, which bounds both the
tree and the cost of copying each hit. The stack and the working path are the
only space beyond the output.

**Complexity:** `O(n^(T/M))` time, `O(T/M)` space.
