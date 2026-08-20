# Solutions — Total Range Across All Selections

## Sorted Min/Max Contribution Counting

Sort the array and count each position's contribution instead of enumerating
all selections. At sorted index `i`, choosing any subset of the `i` earlier
positions makes the value the selected maximum, yielding `2^i` occurrences.
Choosing from the later `n - 1 - i` positions makes it the minimum in
`2^(n-1-i)` occurrences.

Thus this position contributes
`values[i] · (2^i - 2^(n-1-i))`. Summing these terms attributes every
selection exactly once to one maximum position and one minimum position. The
position-based attribution also handles duplicate values without ambiguity.

Precompute powers of two modulo `10^9 + 7`, reduce every accumulated term, and
normalize negative intermediate differences with modular arithmetic.

**Complexity:** `O(n log n)` time and `O(n)` space.
