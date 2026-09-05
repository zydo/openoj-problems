# Solutions — Rows Cleared by a Column Pick

## Enumerate column subsets over row bitmasks

With n ≤ 12, the at most 2¹² = 4096 picks are cheap to enumerate
outright. Encode each row as an n-bit mask of its 1-columns; a pick
covers a row exactly when the row's mask is a subset of it, tested with
`row & ~picked == 0` — rows with no 1s pass automatically. Walk every
mask with popcount equal to `numSelect`, count its cleared rows, and
keep the maximum.

**Complexity:** `O(2ⁿ · m)` time, `O(m)` space.
