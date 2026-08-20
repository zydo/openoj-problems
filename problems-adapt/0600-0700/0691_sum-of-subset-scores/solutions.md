# Solutions — Sum of Subset Scores

## Sorted Sweep with a Running Variant Sum

Sort ascending and process each value `x` as the largest of its subset, so
the score is always `x² · v` for the chosen smallest `v`. Any earlier value
can serve as `v`, and the values strictly between `v` and `x` are optional
padding — each in-or-out choice yields a distinct subset with an identical
score. A pair `(x, v)` with `c` values in between is therefore worth
`x² · v · 2^c`, and summing scores means summing that over all pairs, never
over subsets one at a time.

The pairing bookkeeping compresses into one accumulator
`s = Σ v · 2^(padding after v)` over the prefix handled so far. When the
sweep reaches the next value, every accumulated `(v, padding)` combination
persists in two forms — the new value included as padding or not — doubling
`s` — and the new value additionally enters as a fresh smallest value, hence
`s ← 2s + x`. At `x` itself the contribution is `x² · (s + x)`, where the
trailing `+ x` covers the singleton subset whose smallest and largest are
`x`.

Watch `[2, 6, 4]` run over the sorted order `2, 4, 6`: before anything,
`s = 0`. At 2: add `4 · 2 = 8`, then `s = 2`. At 4: add `16 · (2 + 4) = 96`,
then `s = 8`. At 6: add `36 · (8 + 6) = 504`. The total `8 + 96 + 504 = 608`
matches the subset-by-subset tally.

Every step folds under the modulus because raw products reach `(10⁹)³`; the
sort dominates and the sweep keeps two scalars.

**Complexity:** `O(n log n)` time, `O(n)` space.
