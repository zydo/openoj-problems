# Solutions — Keep the K Mightiest Values

All approaches first need the midpoint: sort (or select) to find the
element at index `(n - 1) / 2` of the sorted order. After that, every
approach ranks values by the pair `(distance from midpoint, value)`,
both descending, and keeps `k` of them. The full custom sort is the
simplest; a heap or a two-pointer sweep over the sorted array can trim
the ranking work, but all of them share the same asymptotics here, so
the plain sort is the one we present.

## Sort by Might Key

Find the midpoint by sorting once and reading position
`((n - 1) / 2)` — this pass is unavoidable in this approach. Then sort
the whole array again with a comparator that prefers larger `|v - m|`,
and on ties prefers the larger value, and return the first `k` elements.
Each comparison is constant time, so the total is dominated by two
sorts. The answer may be returned in any order, so no post-processing
is needed.

**Complexity:** `O(n log n)` time, `O(n)` space (or `O(1)` extra beyond the
sort when sorting in place and copying only the result).
