# Solutions — Versioned Array

## Per-Position Write Histories with Binary-Searched Versions

Two consecutive versions of the array almost always differ in a few positions,
so freezing a full copy per `commit` wastes nearly all of its work. The
`VersionedArray` class inverts the arrangement: a version is never stored.
`commit()` only advances and returns a counter, and each position keeps, for
itself alone, the list of `(commit_id, val)` writes it received.

Two details keep those lists short and truthful. A write is tagged with the
version currently being built, and a second write to the same position before
the next `commit` **overwrites** the last entry instead of appending — one
surviving entry per position per version, so a list grows with distinct
written versions, not with raw `set` calls. And since version ids only move
forward, each list is sorted without any effort.

`get(index, commit_id)` binary-searches that position's list for the latest
entry whose id is at most the query (`bisect_right` against a sentinel tuple
in Python; an explicit halving loop in Java). The value stored there is what
the position held when that version was frozen. When the search falls off the
front — the query predates every write to the position — or the position was
never written at all, the answer is the initial `0`. Positions live in a hash
map, so untouched ones occupy no space.

Both canonical solutions implement exactly this scheme. Over at most
`5 * 10⁴` calls, a `set` costs an `O(1)` amortized append, `commit` a counter
bump, and a `get` an `O(log h)` search over that position's `h` entries —
comfortably inside the limits.

**Complexity:** `O(1)` amortized per `set`, `O(1)` per `commit`, `O(log h)` per
`get`, `O(total writes)` space.
