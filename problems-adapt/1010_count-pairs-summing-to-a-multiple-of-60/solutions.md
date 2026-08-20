# Solutions — Count Pairs Summing to a Multiple of 60

## Remainder buckets in one pass

Whether two entries total a multiple of 60 is settled entirely by their
remainders modulo 60: remainder `r` matches remainder `s` precisely when
`r + s` is 0 or 60. Comparing raw values is wasted motion — bucket the entries
into a fixed 60-slot count array instead.

The sweep reads `durations` left to right, charging each pair to its later
member. Before the current entry's remainder `r` is recorded, the running total
gains `counts[(60 - r) % 60]` — however many earlier entries carry the
remainder that completes `r` up to a multiple of 60 — and only then does
`counts[r]` tick up. The wrapped form `(60 - r) % 60` quietly handles the two
self-matching classes: an entry divisible by 60 looks for bucket 0, and a
remainder-30 entry looks for bucket 30, so `[120, 60, 180]` collects all three
pairs without a special branch.

Nothing pairs in a list like `[95, 155, 20]` — the sweep just adds zeros — and
the answer stays 0, so no early-exit or minimum-length handling is needed.

**Complexity:** `O(n)` time, `O(1)` space for the fixed 60-slot array.
