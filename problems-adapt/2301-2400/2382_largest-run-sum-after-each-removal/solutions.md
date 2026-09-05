# Solutions — Largest Run Sum After Each Removal

## Reverse removals with union-find

Tracking runs while they split apart means a data structure that shards blocks
on demand. Turn the timeline around and the awkward operation disappears: play
the removals backwards over an initially empty array and each step _restores_
one element, so blocks only ever grow and fuse. Restore the positions in the
reverse of `removeQueries` order, note the largest block total after each
restoration, and reverse the notes at the end to line them up with the
forward-order steps. The closing entry is `0` — after the final removal nothing
survives.

Restoring index `i` marks it present with total `nums[i]` and unions it with
any present neighbor. The component's sum is kept at the union's new root
(`ssum[b] += ssum[a]` as `a` is attached under `b`), so `ssum[find(i)]` reads
the whole fused block. Fusions only enlarge blocks along the reversed
timeline, so the running maximum is monotone there — a single `max` per step
is enough, and no lazy or invalid totals ever need discarding.

The loop runs over `removeQueries[1:]` reversed; the skipped first removal
corresponds to the state where every other position still stands, and the `0`
seeded at the front becomes the final answer once everything is flipped back.
`find` halves paths as it walks, keeping union-find's near-constant amortized
cost, and each restoration performs at most two unions.

For `nums = [6,6,6,6]` with `removeQueries = [1,2,0,3]`, reversed time
restores 3, 0, then 2: the isolated blocks give maxima 6, 6, and — once 2
joins 3 — 12, which read backwards yield `[12,6,6,0]`.

**Complexity:** `O(n α(n))` time, `O(n)` space.
