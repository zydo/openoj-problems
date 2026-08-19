# Solutions — Largest Subarray Sum in the Repeated Array

## Kadane with prefix and suffix sums

Split any stretch of the written-out array at the copy boundaries it
crosses: it is a tail of one copy, zero or more complete copies, and a head
of a later copy. The head and tail are scored by the best prefix and suffix
sums of a single copy, each clamped at 0 so the empty stretch stays in play,
and every complete copy contributes the copy total. Those three quantities —
best stretch inside copies, best prefix, best suffix — come out of three
linear scans, and no stretch of the repeated array needs anything more.

For `k == 1` the single-copy scan answers outright. For any larger `k`,
running the same clamped scan over two adjacent copies covers every
candidate that hugs a boundary, because a stretch confined to two neighbors
is exactly a stretch of the doubled array. Only when `k > 2` and the copy
total is positive do whole middle copies earn their place, adding the
candidate `best_suffix + best_prefix + (k - 2) * total`; a non-positive
total makes extra copies pure loss, and the doubled-array result already
stands.

Worked on `arr = [3, -4, 6]`, `k = 3`: the copy total is 5, so middles pay.
Best suffix is 6 (just the final element), best prefix is 5 (the whole
copy), and the candidate is `6 + 5 + 1 * 5 = 16`; the doubled-array scan
tops out at 9 (`6, 3`), so 16 wins — the stretch running from the first 6
through a full copy to the end.

The modulo is applied only after the maximum is taken over raw values:
residues no longer compare by magnitude, and the largest raw candidate is
`10⁵` copies times `10⁵` elements times `10⁴` magnitude — about `10¹⁴`,
comfortably inside 64-bit arithmetic. All-negative inputs sink every
candidate to the floor of 0, which is exactly the empty stretch's score.

**Complexity:** `O(n)` time, `O(n)` space.
