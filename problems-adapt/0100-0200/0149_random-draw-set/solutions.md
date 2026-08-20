# Solutions — Random Draw Set

## One array plus a slot map

The two natural containers each fail one requirement. A hash set settles
presence questions immediately but offers no "give me whatever sits at index
`i`"; an array does offer that — index it randomly and you have a uniform
draw — but proving a value absent means reading the whole thing. The class
therefore holds both: `values`, a plain array of everything currently in the
set, and `index`, a map from each value to the slot it occupies in `values`.
Either question the judge asks is then one hop: presence and location go
through the map, the draw goes through the array.

`insert` appends to `values` and records the new slot in the map. `remove`
cannot afford to close a gap in the middle of the array, so it does not:
the value in the **last** slot is copied over the slot being vacated, the
array shrinks by one, and the copied value's map entry is rewritten to point
at its new slot. When the removed value already occupies the last slot the
copy degenerates into a plain shrink — hence the `slot != last` guard — and
the map entry of the removed value is dropped on either path. Because the
container is a set, a value never has more than one slot, so a single map
repair always suffices.

`draw` reads `values` at a uniformly random index, which is exactly the
uniform distribution over held values. The judge cannot compare one random
return against a fixed expectation, so it replays each judged draw around
2000 times and checks that observed frequencies match each value's fair
share — a sampler that truly indexes uniformly passes without any knowledge
of the checking.

Both ports (Python and Java) hold precisely this pair of structures, so with
at most `2 * 10⁵` operations, each a fixed handful of map and array touches,
the workload sits far below the limits.

**Complexity:** average `O(1)` per `insert`, `remove`, and `draw`; `O(n)` space
for the `n` held values.
