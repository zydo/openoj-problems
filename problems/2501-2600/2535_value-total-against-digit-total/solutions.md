# Solutions — Value Total Against Digit Total

## One pass with running totals

Both sums are linear scans over the same array, so they collapse into one
pass that accumulates them simultaneously: each element adds its full
value to the value total, and its decimal digits — peeled off with `% 10`
and `/ 10` until nothing remains — add to the digit total. Peeling digits
in place reuses the loop variable instead of building strings or
auxiliary tables, which keeps the work per element proportional to its
digit count (at most four here).

The absolute difference collapses to one subtraction at the end. Every
element is at least its own digit total — equality holds exactly when it is
a single digit — so the value total never trails the digit total, but the
stated definition asks for `|x - y|`, and taking the absolute value once
at the end honors it without per-iteration branching.

The bounds are tiny: at most 2000 elements of value at most 2000 give an
value total near 4·10⁶ and a digit total near 8000, comfortably inside
32-bit range and far below JavaScript's exact-Number bound 2⁵³, so every
intermediate stays exact in all seven languages.

**Complexity:** `O(n)` time (times a constant digit count per element),
`O(1)` extra space.
