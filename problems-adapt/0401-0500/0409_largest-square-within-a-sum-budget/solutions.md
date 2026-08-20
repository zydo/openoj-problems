# Solutions — Largest Square Within a Sum Budget

## Prefix Sums with a Growing Side Length

First, a prefix-sum table `prefix` of size (m+1) x (n+1): `prefix[i][j]` is
the total of the rectangle spanning from the top-left corner down to cell
`(i-1, j-1)`. Any square's sum is then four lookups and arithmetic — add and
subtract the corners — so a square query never costs more than O(1).

The search then avoids both a per-cell binary search and a loop over side
lengths. One global best `ans` is carried across a sweep of every top-left
corner `(i, j)`. At each corner the code asks a single question: does a
square of side `ans + 1` fit inside the grid, and does its prefix-sum total
stay within `budget`? When yes, `ans` grows and the question repeats. Since
the best side never shrinks, a corner with nothing to offer fails exactly one
O(1) check, and every successful widening is charged once for its side
length over the whole sweep — the search amortizes into a single linear pass.

The answer is legitimate because feasibility behaves one way as the side
grows (entries are non-negative, so a wider square never sums to less): the
sweep replaces `ans` only when a genuinely larger square is found, and it
visits every top-left corner. A budget below every cell leaves `ans` at 0,
which is exactly the "no square fits" reply, and the fit check
(`i + ans < m`, `j + ans < n`) runs before any lookup so the table is never
read out of range.

**Complexity:** `O(m · n)` time, `O(m · n)` space.
