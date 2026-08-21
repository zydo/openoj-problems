# Solutions — Quadruple Zero Sums

Walking every `(i, j, k, l)` quadruple is `O(n^4)` — at n = 200 that is 1.6
billion combinations. The equation itself suggests something better: four
values total zero exactly when the first pair's sum cancels the second pair's,
`a + b = -(c + d)`. The four arrays split into two independent halves around
that equation, and both solutions below join the halves — one with a hash map
carrying multiplicities, the other with a sorted array bracketed by binary
searches. The split is the shared insight; the join is where they differ.

## Meet in the Middle

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

## Sorted Binary Search

The hash map's job is only to answer, per left sum, "how many right sums
equal its negation?" A sorted array answers the same question, provided the
question is asked differently: bracket the run of equal values with two
binary searches and measure its length. That is this variant's whole plan.
It materialises the `n²` sums `a + b` of the first two arrays into one flat
list and the `n²` sums `c + d` of the last two into another, sorts the
second list, and then for each left sum adds
`upper_bound(right, -(a+b)) - lower_bound(right, -(a+b))` to the tally.

Multiplicities survive by construction — duplicates sit side by side after
the sort as a run whose length the two bounds measure, so example 3's six
quadruples fall out exactly as they do from the map's counters. And the
tally stays exact for the same reason as in the map version: every
quadruple is counted once, through its unique half-split. The trade is
time for machinery: sorting costs `O(n² log n)` and each of the `n²`
lookups pays another `log` factor, against the map's expected-constant
joins — deterministic, ordered behaviour in exchange.

The two lists of `n²` sums dominate storage; at n = 200 that is 40,000
entries each, and the running total can reach `n⁴ = 1.6 × 10⁹`, which is
why the tally widens to 64 bits in several ports.

**Complexity:** `O(n² log n)` time, `O(n²)` space for the pair-sum lists.
