# Solutions — Blocks That Trade Places

## Block Multiset Comparison

Cutting `s` into `k` equal blocks and reordering them can produce `t`
exactly when `s`'s block sequence, viewed as a multiset, equals `t`'s
block sequence viewed the same way: the concatenation order is free, so
the only thing that matters is which blocks exist and how often. The
block size is `len(s) / k`, guaranteed to divide evenly.

Hash-counting settles it in one pass: count every block of `s` in a map,
then walk `t`'s blocks and consume one occurrence of each. Any block of
`t` whose count is already exhausted — or was never counted — proves the
multisets differ and the answer is `false`; consuming all `k` blocks
without failure proves the rearrangement exists. Each block is built
once and hashed in time proportional to its length, so the whole scan is
linear in the total string length.

The guaranteed anagram property between `s` and `t` is a red herring —
character-level multisets always match, but block boundaries still
differ, which is exactly what the per-block comparison detects
(`"aabbcc"` with `k = 2` splits as `"aab" | "bcc"` versus `"bba" |
"acc"`). Inputs run to `2 * 10⁵` characters, so a quadratic comparison
of blocks would time out; the hash pass stays linear.

**Complexity:** `O(n)` time, `O(n)` space.
