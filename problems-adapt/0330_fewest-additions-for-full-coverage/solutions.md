# Solutions — Fewest Additions For Full Coverage

## Greedy Coverage Doubling

One number describes the whole state of the search: `reachable`, the smallest
positive total that no subset of the entries consumed so far can produce.
Everything strictly below `reachable` is settled, and the job is finished the
moment `reachable` climbs past `n`.

Two moves advance it. If the next unconsumed entry is at most `reachable`,
folding it in costs nothing and slides the frontier to
`reachable + nums[i]`: any total `t` in the freshly claimed span satisfies
`0 <= t - nums[i] < reachable`, so `t` is that entry plus a total already
known to be formable (or the entry by itself). If instead the next entry
exceeds `reachable` — or the entries have run out — nothing available lands on
`reachable`, and an insertion is unavoidable. Inserting `reachable` is the
strongest legal move: a smaller value claims less new ground, and a larger one
leaves the hole where it was, so no alternative insertion can ever put the
frontier higher. The frontier therefore jumps to `2 * reachable`.

Every iteration either consumes an entry or performs an insertion, and each
insertion doubles the frontier, so with `n` as large as `2^31 - 1` at most
about 31 insertions can occur. Loop control matters here: stopping the instant
the frontier exceeds `n` is what makes an already-sufficient array such as
`[1,2,4,8]` return zero instead of padding it further. Because the frontier can
grow past `2^31` on the last doubling, keep it in a 64-bit variable — the
typed languages overflow otherwise.

**Complexity:** `O(len(nums) + log n)` time, `O(1)` space.
