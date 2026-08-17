# Solutions — Random Pick with Weight

## Prefix Sums plus Binary Search (Inverse CDF)

The required distribution — index `i` with probability `w[i] / sum(w)` — becomes trivial once it is drawn geometrically. Lay the weights end to end: prefix sums `P[i+1] = P[i] + w[i]` carve `[0, total)` into segments where segment `i` has length exactly `w[i]`. A single uniform integer over the interval therefore lands in segment `i` with probability `w[i] / total`, and locating the segment is a binary search over the sorted boundary array (`bisect_left` in Python, a hand-rolled loop in Java, both `O(log n)`).

The boundary convention must be fixed once and applied the same way on both sides: the canonical solutions draw `target ∈ [1, total]` and return the index of the first prefix boundary that is `>= target`. Slipping one comparison (`>` for `>=`, or `target` off by one) does not crash — it leaks a single unit of probability onto a neighboring index, which is invisible in small samples and glaring in the statistical judge's per-index frequencies (each judged `pickIndex` runs thousands to hundreds of thousands of draws, and every index's empirical frequency must match `w[i] / sum(w)` within a tolerance band).

Prefix sums are accumulated into `long` in the Java version: `10⁴` weights of `10⁵` sum to `10⁹`, which fits 32-bit ints only marginally and leaves no room for the `+1` bounds used during drawing.

**Judged scale.** A frequency bucket needs roughly `1400` expected draws before its tolerance band clears the noise floor with margin, so the statistically judged arrays hold at most ~100 indices with balanced weights (draw counts scale up to ~300000 accordingly, since each `pickIndex` costs one `O(log n)` search). A maximum-length `10⁴`-element array appears as a validity case — every draw must return a legal index — with its per-index frequencies merged into the distribution's tail.

**Complexity:** `O(n)` construction, `O(log n)` per `pickIndex`, `O(n)` space.
