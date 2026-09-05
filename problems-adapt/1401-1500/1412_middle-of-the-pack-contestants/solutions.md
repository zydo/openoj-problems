# Solutions — Middle-of-the-Pack Contestants

## Exclude the per-heat extremes

The definition splits into two set conditions, each over contestant
ids. A contestant qualifies only if they entered at least one heat —
their id occurs somewhere in `Heats` — and if no heat they entered has
them at that heat's highest or lowest score.

The second condition turns into a disqualified set built in one
grouped pass: a subquery groups `Heats` by `heat_id` and computes each
heat's `MAX(score)` and `MIN(score)`; joining `Heats` back onto that
summary marks every row whose score equals one of its heat's
extremes, and the marked rows' `contestant_id`s make up the
disqualified set. Ties need no extra work — equality with the extreme
is what disqualifies, so co-holders of a top or bottom score are all
marked.

The final `SELECT` walks `Contestants` and keeps the ids that occur in
`Heats` but never in the disqualified set: `IN (SELECT DISTINCT
contestant_id FROM Heats)` enforces the entered-at-least-one-heat
requirement (and quietly drops contestants who never competed), while
`NOT IN` against the marked ids removes anyone who ever held an
extreme. Ordering by `contestant_id` completes the contract.

**Complexity:** `O(E)` to scan and group `Heats` plus `O(C)` for the
final filter, with a hash-friendly `NOT IN` evaluation; `O(C + E)`
space for the sets.
