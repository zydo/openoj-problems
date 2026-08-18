# Solutions — Quadruple Zero Sums

## Meet in the middle

Walking every `(i, j, k, l)` quadruple is `O(n^4)` — at n = 200 that is 1.6
billion combinations. The equation itself suggests something better: four
values total zero exactly when the first pair's sum cancels the second
pair's, `a + b = -(c + d)`. The four arrays split into two independent
halves around that equation, and a hash map joins them.

The first pass builds `sums`, mapping each value `a + b` — taken over all
`n²` index pairs of the first two arrays — to the number of pairs that
reach it. The second pass walks the `n²` pairs of the last two arrays and,
for each `c + d`, adds `sums[-(c + d)]`, the number of ways the first half
could have produced exactly the cancelling value. Every zero-sum quadruple
is counted once, through its unique `(i, j)` / `(k, l)` split, so the total
is exact. Repeated values cause no trouble: the map carries multiplicities,
not just the set of sums reached. Example 3 leans on that — each array holds
one `1` and one `-1`, the map for the first half says the sum `2` arises
once and `0` once and `-2` once, and the six zero-total quadruples all fall
out of the lookups.

Two quadratic loops with constant-time hash work replace the quartic one.
At n = 200 that is 40,000 insertions and 40,000 lookups, and no sum
overflows: values stay within `2^28`, so even the negated pair sums fit
easily in machine integers.

**Complexity:** `O(n²)` time, `O(n²)` space for the pair-sum map.
