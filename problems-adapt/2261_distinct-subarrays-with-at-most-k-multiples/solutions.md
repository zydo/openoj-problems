# Solutions — Distinct Subarrays With at Most K Multiples

## Enumerate runs with a hash set

With `n <= 200` there are at most `n(n+1)/2 = 20100` runs to look at, so
enumerate, filter, deduplicate is affordable as-is. The code fixes a left
endpoint `i` and advances the right endpoint `j` one slot at a time, keeping
a running tally of elements divisible by `p` alongside the growing list of
values. The tally only climbs, so the moment it passes `k` the inner loop
stops: no longer extension of this run can come back under the limit, and
nothing beyond it is worth scanning.

Deduplication rides on the set: each qualifying run is inserted as a tuple,
and tuples hash by content, so the three separate `[3]` runs of
`[3, 6, 6, 3, 3]` collapse to one entry while runs of different lengths or
differing at any slot stay apart. The answer is the set's size — the counting
is entirely delegated to the dedup.

Materializing tuples is what costs: each of the up-to-`O(n²)` runs is copied
and hashed at its own length, so the worst case is cubic in total work and
storage — on the order of `8 × 10⁶` elementary items at `n = 200`, well inside
the limits. The `O(n²)` follow-up (rolling hashes or a trie over suffixes)
would only matter at much larger `n`.

**Complexity:** `O(n³)` time, `O(n³)` space.
