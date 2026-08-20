# Solutions — Suffix Products Over a Stream

## Prefix Products with Zero Reset

Multiplying the requested window on demand costs `O(k)` per query, which
decays toward `O(n)` as windows lengthen. The class instead keeps `prefix`,
the running product of every prefix of the current block of numbers,
anchored at `prefix[0] = 1`. A suffix product is then one division:
`prefix[n] / prefix[n - k]`.

A `0` ruins every product spanning it, permanently — no later value can
un-zero it — so `append(0)` throws the table away and restarts from the
lone sentinel `1`. This is also what keeps the stored numbers small: every
product in the table covers only values since the last zero, and the
problem guarantees any contiguous product fits in 32 bits.

The restart settles spanning queries arithmetically: when `k` is at least
the current block length (`size`), the window must contain the zero, and
`suffixProduct` returns `0` without touching the array. One division per
query, one multiplication per append: both operations are constant time,
which answers the follow-up. The Java port doubles its prefix array
instead of reallocating per element and computes in `long` even though 32
bits suffice, so overflow can never decide a test.

**Complexity:** `O(1)` time per `append`/`suffixProduct`, `O(n)` space for
the current block.
