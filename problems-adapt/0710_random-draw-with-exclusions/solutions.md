# Solutions — Random Draw With Exclusions

## Compressed Range With Hash Remap

Count the survivors first: `n - b` of them, writing `b` for the number of
barred values. A uniform draw over `[0, n - b)` therefore produces the right
number of outcomes; what it does not yet produce is the right *set*, because
some positions below `n - b` are barred themselves. The constructor repairs
that once and for all. For each barred position `v < n - b` it chooses a
survivor from the tail `[n - b, n)` and records the pair. The tail always has
enough to give: it spans `b` positions, the barred values number `b` in total,
and every barred value living below the cut is one that is *not* occupying the
tail — so survivors up there outnumber the positions needing a stand-in.

`pick` is then one random draw over the short range plus one map lookup, which
is the identity for the untouched majority. The result is uniform over exactly
the surviving set, which is the property the statistical judge measures: it
takes thousands of draws per judged call and requires every legal candidate's
observed share to land within a tolerance band of `1 / (n - b)`.

Both references build the tail pairing in a single pass — the Python one pulls
from a generator that walks upwards skipping barred values, the Java one
advances an index doing the same — so construction is `O(b)` hash operations
and never looks at the untouched middle of the range. That independence from
`n` is the whole point: retry-based sampling needs `n / (n - b)` random calls
per draw on average, which is fine when the barred set is sparse and hopeless
when it is not.

**Judged scale.** A frequency bucket only becomes meaningful after roughly
1400 expected observations, so the statistical cases keep the survivor count
near 200 or below, with `n` up to about `2 * 10⁴` and draw counts up to
300000. They include barred sets packed at the bottom of the range, where
every one of them needs a stand-in; packed at the top, where none does; and
dense sets that leave only a couple of survivors. The `10⁹` ceiling in the
constraints is beyond any enumerable table, which is precisely why the
`O(b)` construction and single-call `pick` matter.

**Complexity:** `O(b)` construction, `O(1)` per `pick` — one random call —
and `O(b)` space.

Take Example 1, `n = 9` with `[1, 4, 6, 7]` barred. Five values survive, so
draws come from `[0, 5)`; positions 1 and 4 are barred and get stand-ins from
the tail `[5, 9)`, whose survivors are 5 and 8. A draw of 0, 2 or 3 is returned
as it stands, a draw of 1 becomes 5 and a draw of 4 becomes 8 — five outcomes,
one fifth each.
