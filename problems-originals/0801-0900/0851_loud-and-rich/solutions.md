# Solutions — Loud and Rich

## Kahn sweep down the richness DAG

Each pair `[a, b]` in `richer` is a directed edge from a richer person to a
poorer one, so the people who definitely have equal to or more money than `x`
are exactly `x` plus its ancestors in that directed acyclic graph — the
statement's logical-consistency guarantee is what makes the relation acyclic,
and the argmin over that set is unique because every `quiet` value is. Rather
than re-deriving the whole ancestor set for every person, the sweep settles
persons from the known-richest downward and lets each settled answer flow to
everyone poorer.

The code first builds the richer-to-poorer adjacency with a `pending` counter
per person — how many directly richer persons have not yet relaxed into it —
and seeds a worklist with everyone whose count is zero: persons nobody is
known to outrank, whose answer is themselves. Each settled person `x` then
relaxes into every directly poorer neighbor `b`, replacing `answer[b]` with
`answer[x]` whenever `quiet[answer[x]]` is smaller, and decrements `b`'s
counter; a person joins the worklist exactly when its counter hits zero, so
by the time `b` is settled every richer person above it has already relaxed a
final, fully-inherited answer into it. That induction is why a single
candidate per edge suffices — the quietest person among `b` and its direct
richer neighbors transitively covers every ancestor.

Each person and each pair is touched a constant number of times, so the sweep
is linear in the input; the adjacency, counters, worklist, and answer array
are each bounded by `n` persons plus `m` pairs.

**Complexity:** `O(n + m)` time, `O(n + m)` space.
