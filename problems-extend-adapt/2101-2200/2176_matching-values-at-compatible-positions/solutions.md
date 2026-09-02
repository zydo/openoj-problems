# Solutions — Matching Values at Compatible Positions

## Check every index pair

The bounds are tiny (`n <= 100`, at most 4950 pairs), so enumerating each
pair `i < j` once and testing both conditions — equal values and
`(i * j) % k == 0` — is exact and fast. No preprocessing pays for itself
at this size.

**Complexity:** `O(n^2)` time, `O(1)` space.
