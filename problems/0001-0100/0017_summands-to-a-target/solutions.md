# Solutions — Summands To A Target

Both solutions enumerate the same ways — each multiset of candidate copies
summing to `target`, once — and both pin the enumeration with the same idea:
process candidates in array order and never look backwards, so of all the
orderings of a multiset exactly one can ever be assembled. The backtracking
walks the search tree depth first, discovering a way each time a path owes
nothing. The bottom-up table turns that inside out: it settles small amounts
first and builds larger ones by extending already-finished ways, so no
branch is ever walked twice and the recursion disappears.

## Backtracking

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

## Bottom Up

The recursion asks one cell of a table that is never written twice: "which
ways reach amount `t` using the first `k` candidates?" The bottom-up sweep
answers those cells directly, smallest amount first. `table[t]` lists the ways
reaching `t`, seeded by `table[0] = [ [] ]` — owing nothing has the empty way.
Then one pass per candidate — the array-order guarantee that replaced the
start index — walks amounts ascending and, at each `t`, appends `value` to a
copy of every way in `table[t - value]`.

Two rules of that loop do the backtracking's work. Ascending amounts *within*
a pass let a way already containing this candidate be extended by it again —
`table[4]` gains `[2]` and later `[2,2]` gains from `table[2]` — which is the
unlimited reuse. And the candidate-outer order pins each multiset to a single
assembly: a way is always a run of copies of some candidate, then a run of the
next, so `[2,2,4]` can be built but `[4,2,2]` never forms. Nothing is memoized
across branches; a way once recorded at `table[t]` simply sits there, ready
for every later candidate that needs it.

What the table cannot do is emit the ways in the order the search tree meets
them — its rows fill in amount order — so a final sort orders `table[target]`
lexicographically by candidate position, which is exactly the discovery order
of the depth-first walk (a way can never be a prefix of another, since the
values are positive). Each cell extension copies one way once, so the whole
sweep costs `O(n · T · W)` where `W` is the number of ways recorded; the table
itself is the only storage beyond the output.

**Complexity:** `O(n · T · W)` time, `O(T · W)` space, with `W` the number of
ways found.
